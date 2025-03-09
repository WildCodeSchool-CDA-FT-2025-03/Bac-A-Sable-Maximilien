import { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import { AppError } from "@/types/errors.types";
export default (
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof AppError) {
    res.status(err.code).json({
      error: err.message,
      status: err.status,
      code: err.code,
    });
  } else {
    res.status(500).json({ error: "Unknown error" });
  }

  next();
};
