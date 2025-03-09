import { Request, Response, NextFunction } from "express";
import { CheckQueryRequest } from "@/shemas/client.shemas";
import { GetRepositoryRequest } from "@/types/client.types";
import { RepositoryFields, GetRepositorysConfig } from "@/core/repository";

export default {
  getRepositorys: (req: Request, res: Response, next: NextFunction) => {
    const { error } = CheckQueryRequest.validate(req.query);
    const config = new GetRepositorysConfig(); 

    if (error) {
      res.status(422).json(error);
    }
    else {
      const fields = req.query.fields as string;

      if(fields) {
        const query = fields.split(',');
        config.fields = query as RepositoryFields[];
        delete req.query.fields;
      }

      config.filter = req.query || {};

      if(req.query.limit !== undefined) {
        config.limit.count = +req.query.limit;

        if(req.query.page !== undefined) {
          config.limit.page = +req.query.page;
        }
      }

      if(req.params.repoid !== undefined) {
        config.filter.id = req.params.repoid;
        config.limit.count = 1;
        config.limit.page = 0;
      }
      
      res.locals.config = config;

      next();
    }
  },
}
