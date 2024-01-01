import { Response, Request, NextFunction } from "express";
import User from "../models/User";
import jwt from "jsonwebtoken";
require("dotenv").config();

module.exports = {
  userVerification: async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.cookies);
    console.log(req.headers);
    const token = req.cookies.token;
    if (!token) {
      return res.json({ status: false });
    }

    try {
      const decodedToken: any = jwt.verify(
        token,
        process.env.SECRETE_KEY ?? "defaultKey"
      );
      const user = await User.findOne({ email: decodedToken.email });

      if (user) {
        return res.json({ status: true, existsUser: user.email });
      } else {
        return res.json({ status: false });
      }
    } catch (err) {
      console.error("Error during user verification:", err);
      return res.json({ status: false });
    }
  },
};
