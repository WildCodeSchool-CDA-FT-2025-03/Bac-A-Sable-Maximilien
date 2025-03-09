import { Request, Response, NextFunction } from "express";
import logger from "@/services/logger";

export default (req: Request, _: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.get("host") + req.originalUrl}`);
  next();
};
