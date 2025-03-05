import { Request, Response, NextFunction } from "express";

import repos from "@/datas/static_data.json"
import { GitHubRepository } from "@/types/github.types";

export const reposNotExist = (req: Request, res: Response, next: NextFunction) => {
    const data = res.locals.data as GitHubRepository;

    const index = repos.findIndex(r => {
        return r.id === data.id;
    });

    if (index !== -1) {
      res.status(422).send("Repos already exist");
    } 
    else {
      next();
    }
};