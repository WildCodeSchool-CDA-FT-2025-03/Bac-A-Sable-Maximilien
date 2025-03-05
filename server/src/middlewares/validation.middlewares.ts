import { Request, Response, NextFunction } from "express";
import { ClientAddRepo } from "@/shemas/client.shemas";
import { toGitHubRepository } from "@/utiles/repos";

export const validateClientAddRepo = (req: Request, res: Response, next: NextFunction) => {
    const { error } = ClientAddRepo.validate(req.body);
    const data = toGitHubRepository(req.body);
    res.locals.data = data;
    
    if (error) {
      res.status(422).json(error);
    } else {
      next();
    }
  };