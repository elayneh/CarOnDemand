import { NextFunction, Request, Response } from "express";
const jwt = require("jsonwebtoken");

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
}
export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.header("Authorization");
  if (!token) {
    res.status(401).json({ error: "Access denied please login first." });
    console.error("Access denied please login first");
  } else {
    jwt.verify(
      token,
      (process.env.JWT_SECRET_KEY as string) || "defaultKey",
      (err: any, user: User) => {
        if (err) {
          res.status(403).json({
            error: "Invalid token",
          });
        } else {
          req.body.userData = user;
          next();
        }
      }
    );
  }
};
