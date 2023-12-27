import { NextFunction, Request, Response } from "express";

const jwt = require("jsonwebtoken");

module.exports = {
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
      (err, decoded) => {
        if (err) {
          return res.status(401).json({ message: "Token is not valid" });
        }

        // Attach the decoded user information to the request object
        console.log(req);
        next();
      }
    );
  },
};
