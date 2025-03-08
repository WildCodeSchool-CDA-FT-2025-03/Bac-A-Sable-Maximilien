import { Request, Response, NextFunction } from "express";
import { CheckClientAddRepo, CheckQueryRequest } from "@/shemas/client.shemas";
import { toGitHubRepository } from "@/utiles/repos";
import { GetRepositoryRequest } from "@/types/client.types";
import { RepositoryFields } from "@/core/repository";
import data_repo from "@/datas/static_data";

export default {
  addRepoRequest: (req: Request, res: Response, next: NextFunction) => {
    const { error } = CheckClientAddRepo.validate(req.body);
    const data = toGitHubRepository(req.body);
    res.locals.data = data;
    
    if (error) {
      res.status(422).json(error);
    } 
    else {
      next();
    }
  },

  queryParameter: (req: Request, res: Response, next: NextFunction) => {
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
  },

  getRepositorys: (req: Request, res: Response, next: NextFunction) => {
    const { error } = CheckQueryRequest.validate(req.query);
    const config: GetRepositoryRequest = {}; 

    if (error) {
      res.status(422).json(error);
    }
    else {
      const fields = req.query.fields as string;
      res.locals.filters = req.query;

      if(fields) {
        const query = fields.split(',');
        config.fields = query as RepositoryFields[];
        delete req.query.fields;
      }

      config.filter = req.query || {};

      if(req.params.repoid !== undefined) {
        config.filter.id = req.params.repoid;
        config.filter.limit = 1;
      }

      console.log(config)
      res.locals.config = config;
      res.locals.datas = data_repo;

      next();
    }
  },
}
