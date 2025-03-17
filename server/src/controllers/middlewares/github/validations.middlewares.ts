import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "@/types/errors.types";

import { CheckQueryRequest } from "@/shemas/client.shemas";

import {
  RepositoryFields,
  GetGithubRepositoriesConfig,
} from "@shared/repository.types";

export default {
  getRepositorys: (req: Request, res: Response, next: NextFunction) => {
    const { error } = CheckQueryRequest.validate(req.query);
    const config = new GetGithubRepositoriesConfig();

    if (error) {
      throw new BadRequestError("Invalid query parameters");
    } else {

      if (req.params.owner === undefined) {
        throw new BadRequestError("Invalid query parameters: need owner");
      }
      config.owner = req.params.owner;

      const fields = req.query.fields as string;

      if (fields) {
        const query = fields.split(",");
        config.fields = query as RepositoryFields[];
        delete req.query.fields;
      }

      config.filter = req.query || {};

      if (req.query.limit !== undefined) {
        config.limit.count = +req.query.limit;

        if (req.query.page !== undefined) {
          config.limit.page = +req.query.page;
        }
      }

      if (req.query.filterLanguages !== undefined) {
        config.filter.filterLanguages = req.query.filterLanguages as string;
      }

      if (req.params.repoid !== undefined) {
        config.filter.id = req.params.repoid;
        config.limit.count = 1;
        config.limit.page = 0;
      }

      res.locals.config = config;

      next();
    }
  },
};
