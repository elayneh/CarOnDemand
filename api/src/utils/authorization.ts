import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = {
  createSecreteToken: (id: any): Promise<boolean> => {
    return jwt.sign({ id }, process.env.SECRETE_KEY, {
      expiresIn: 3 * 24 * 60 * 60,
    });
  },

  varifyToken: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    const { authorization } = req.headers;
    const token = authorization && authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    jwt.verify(
      token,
      process.env.JWT_SECRET_KEY || "defaultKey",
      (err: any, decoded: JwtPayload) => {
        if (err) {
          return res.status(401).json({ message: "Token is not valid" });
        }
        console.log(req);
        next();
      }
    );
  },
};
