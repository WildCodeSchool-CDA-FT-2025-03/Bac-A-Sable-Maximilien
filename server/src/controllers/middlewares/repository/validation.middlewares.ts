import { Request, Response, NextFunction } from "express";
import {
  CheckQueryRequest,
  CheckClientAddRepo,
  CheckUpdateRepository,
} from "@/shemas/client.shemas";
import {
  RepositoryFields,
  GetRepositoriesConfig,
  ConstructGitHubRepository,
  UpdateRepository,
} from "@shared/repository.types";
import { BadRequestError } from "@/types/errors.types";

export default {
  getRepositorys: (req: Request, res: Response, next: NextFunction) => {
    const { error } = CheckQueryRequest.validate(req.query);
    const config = new GetRepositoriesConfig();

    if (error) {
      throw new BadRequestError("Invalid query parameters");
    } else {
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

  newRepository: (req: Request, res: Response, next: NextFunction) => {
    const { error } = CheckClientAddRepo.validate(req.body);

    if (error) {
      throw new BadRequestError("Invalid query parameters");
    } else {
      const new_repo = {
        user: req.body.user,
        name: req.body.name,
        isPrivate: req.body.isPrivate,
      } as ConstructGitHubRepository;

      res.locals.repo = new_repo;
      next();
    }
  },

  updateRepository: (req: Request, res: Response, next: NextFunction) => {
    const { error } = CheckUpdateRepository.validate(req.body);

    if (req.params.repoid === undefined) {
      throw new BadRequestError("Invalid query parameters, missing id");
    }

    if (error) {
      throw new BadRequestError("Invalid query parameters");
    } else {
      const update_repo = {} as UpdateRepository;

      if (req.body.isPrivate !== undefined) {
        update_repo.isPrivate = req.body.isPrivate;
      }
      if (req.body.languages !== undefined) {
        update_repo.isPrivate = req.body.languages;
      }

      res.locals.repo = update_repo;
      res.locals.id = req.params.repoid;
      next();
    }
  },
};
