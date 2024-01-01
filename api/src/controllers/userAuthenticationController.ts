import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User";
import validator from "validator";
const cookieParser = require("cookie-parser");
const { createSecreteToken } = require("./../utils/authorization");

module.exports = {
  register: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { firstName, lastName, email, password } = req.body;

      if (!firstName || !lastName || !email || !password) {
        return res
          .status(400)
          .json({ message: "Please fill in all required fields" });
      }
      if (!validator.isEmail(email)) {
        return res
          .status(400)
          .json({ message: "Email is not valid email address" });
      }
      if (password.length < 8) {
        return res
          .status(400)
          .json({ message: "Password must be at least 8 characters" });
      }
      const existsUser = await User.findOne({ email });
      if (existsUser) {
        return res.status(400).json({ message: "Email already in use" });
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });
      if (!newUser) {
        return res.status(400).json({ message: "Invalid user data" });
      }
      await newUser.save();

      const { _id } = newUser;
      const token = createSecreteToken(_id);
      res.cookie("token", token, { httpOnly: false });
      const userData = {
        firstName,
        lastName,
        email,
        password: undefined,
        token,
      };
      res.status(201).json({
        message: "User registered successfully",
        success: true,
        userData,
      });
      next();
    } catch (error) {
      console.error("Registration failed", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  login: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      if (!(email && password)) {
        return res.status(400).json({ message: "Incorrect password or email" });
      }

      const existsUser = await User.findOne({ email });
      if (!existsUser) {
        return res.status(401).json({
          message: "Incorrect email or password",
        });
      }
      const isPasswordCorrect = await bcrypt.compare(
        password,
        existsUser.password
      );
      if (!isPasswordCorrect) {
        return res.status(401).json({ message: "Incorrect password or email" });
      }
      const token = createSecreteToken(existsUser._id);
      res.cookie("token", token, {
        httpOnly: false,
      });
      res
        .status(200)
        .json({ message: "User logged in successfully", success: true });
    } catch (err) {
      console.error("Authentication failed", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  logout: async (req: Request, res: Response, next: NextFunction) => {
    res.cookie("token", "", { httpOnly: false });
    return res.status(200).json({ message: "User logged out successfully" });
  },
};
