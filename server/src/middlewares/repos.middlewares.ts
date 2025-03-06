import { Request, Response, NextFunction } from "express";
import repos from "@/datas/static_data.json"
import repository, {GitHubRepository, RepositorysFilter} from "@/core/repository";

export const reposNotExist = (_: Request, res: Response, next: NextFunction) => {
    const data = res.locals.data as GitHubRepository;

    const result = repository.exist(repos, data);

    if (result) {
      next();
    } 
    else {
      res.status(422).send("Repos already exist");
    }
};

export const getRepositorys = (req: Request, res: Response, next: NextFunction) => {
  
    const filters =  res.locals.filters as RepositorysFilter;
    res.locals.repository = repository.filter(repos, filters);

    next();
};