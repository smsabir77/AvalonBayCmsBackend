import { Request, Response, NextFunction } from "express";
import { env } from "../config/env";

export function requireAppToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers["x-app-token"];

  if (!token || token !== env.appConfigApiToken) {
    return res.status(401).json({
      message: "Unauthorized: Invalid or missing app token",
    });
  }

  next();
}
