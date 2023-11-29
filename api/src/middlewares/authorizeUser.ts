import { Response, Request, NextFunction } from "express";
export const authorizeUser = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (req.body.useData.role !== "admin") {
    res.status(403).json({ error: "Permission denied" });
    next();
  }
};
