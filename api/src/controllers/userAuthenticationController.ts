import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User";
import validator from "validator";
const cookieParser = require("cookie-parser");

module.exports = {
  register: async (req: Request, res: Response) => {
    try {
      const { firstName, lastName, email, password } = req.body;
      const userExist = await User.findOne({ email });

      if (!firstName || !lastName || !email || !password) {
        res.status(400).json({ message: "Please fill in all required fields" });
        console.error("Please fill in all required fields");
      } else if (!validator.isEmail(email)) {
        res.status(400).json({ message: "Email is not valid email address" });
        console.error("Email is not valid email address");
      } else if (password.length < 8) {
        res
          .status(400)
          .json({ message: "Password must be at least 8 characters" });
        console.error("Password must be at least 8 characters");

        // Check if user with the same email exists
      } else if (userExist) {
        res.status(400).json({ message: "Email already in use" });
        console.error("Email already in use");
      } else {
        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new User({
          firstName,
          lastName,
          email,
          password: hashedPassword,
        });
        if (newUser) {
          await newUser.save();
          const { firstName, lastName, email, password, _id } = newUser;

          // Generate a JWT token for authentication
          const token = jwt.sign(
            { userId: newUser.email },
            process.env.JWT_SECRET_KEY || "defaultKey",
            {
              expiresIn: "3h",
            }
          );
          res.status(201).json({
            userData: {
              firstName,
              lastName,
              email,
              password: undefined,
              token,
            },
          });
        } else {
          res.status(400).json({ message: "Invalid user data" });
          console.error("Invalid user data");
        }
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  login: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { email, password } = req.body;
      if (!(email && password)) {
        res.status(400).json({ message: "Email or password is not correct" });
        console.error("Email or password is not correct");
      } else {
        const foundUser = await User.findOne({ email });
        if (!foundUser) {
          res.status(401).json({ message: "Email or password is not correct" });
          console.error("Email or password is not correct");
        } else {
          const isPasswordCorrect = bcrypt.compare(
            password,
            foundUser.password,
            async (err, result) => {
              if (err) {
                console.error("Email or password is not correct");
                res
                  .status(401)
                  .json({ message: "Email or password is not correct" });
              } else if (result) {
                const token = jwt.sign(
                  { userId: foundUser._id },
                  process.env.JWT_SECRET_KEY || "defaultKey",
                  {
                    expiresIn: "3h",
                  }
                );
                const { firstName, lastName, email, password } = foundUser;

                const user = await User.findOne({ email }).select(
                  "-password -_id -__v -role"
                );
                res
                  .status(200)
                  // .cookie("token", token, options)
                  .json({
                    userData: {
                      firstName,
                      lastName,
                      email,
                      password: undefined,
                      token,
                    },
                  });
              } else {
                res
                  .status(401)
                  .json({ message: "Email or password is incorrect" });
              }
            }
          );
        }
      }
    } catch (err) {
      console.log("Authentication failed");
    }
  },
};
