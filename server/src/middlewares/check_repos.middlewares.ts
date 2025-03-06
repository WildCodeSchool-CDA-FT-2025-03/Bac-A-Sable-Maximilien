import { Request, Response, NextFunction } from "express";
import repos from "@/datas/static_data.json"
import repository, {GitHubRepository} from "@/core/repository";

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