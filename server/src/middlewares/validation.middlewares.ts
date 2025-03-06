import { Request, Response, NextFunction } from "express";
import { CheckClientAddRepo, CheckQueryRequest } from "@/shemas/client.shemas";
import { toGitHubRepository } from "@/utiles/repos";

export const checkAddRepoRequest = (req: Request, res: Response, next: NextFunction) => {
    const { error } = CheckClientAddRepo.validate(req.body);
    const data = toGitHubRepository(req.body);
    res.locals.data = data;
    
    if (error) {
      res.status(422).json(error);
    } 
    else {
      next();
    }
  };

export const checkQueryParameter = (req: Request, res: Response, next: NextFunction) => {
  const { error } = CheckQueryRequest.validate(req.query);

  if (error) {
    res.status(422).json(error);
  }
  else {
    const fields = req.query.fields as string;
    res.locals.filters = req.query;

    if(fields) {
      res.locals.fields = fields.split(',');
    }

    next();
  }
}