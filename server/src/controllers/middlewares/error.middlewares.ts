import { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import { AppError } from "@/types/errors.types";
import logger from "@/services/logger";

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
    logger.error(`${req.method} ${req.get("host") + req.originalUrl}: ${err.message}`);
  } else {
    res.status(500).json({ error: "Unknown error" });
  }

  next();
};
