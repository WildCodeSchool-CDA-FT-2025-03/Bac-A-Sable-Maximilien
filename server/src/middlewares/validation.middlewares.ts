import { Request, Response, NextFunction } from "express";
import { ClientAddRepo } from "@/shemas/client.shemas";

export const validateClientAddRepo = (req: Request, res: Response, next: NextFunction) => {
    const { error } = ClientAddRepo.validate(req.body);
  
    if (error) {
      res.status(422).json(error);
    } else {
      next();
    }
  };