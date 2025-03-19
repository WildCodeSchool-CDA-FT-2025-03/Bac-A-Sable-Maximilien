import { Request, Response } from "express";
// import repositoryModel from "@/models/repository.model";
import { StaticModel } from "@/models/static.model";

export default {
  getRepositorys: async (_: Request, res: Response) => {
    const config = res.locals.config;
    const repos = await new StaticModel("").get(config);

    res.status(200).json(repos);
  },

  getMetadataRepositories: async (_: Request, res: Response) => {
    const config = res.locals.config;
    const repos = await new StaticModel("").getWithMetadata(config);

    res.status(200).json(repos);
  },

  getOneRepository: async (_: Request, res: Response) => {
    const config = res.locals.config;
    const repos = await new StaticModel("").get(config);

    res.status(200).json(repos);
  },

  deleteRepository: async (req: Request, res: Response) => {
    let count = 0;

    if (req.params.repoid !== undefined) {
      count = await new StaticModel("").removeByID([req.params.repoid]);
    }

    res.status(200).json({ delete: count });
  },

  addRepository: async (_: Request, res: Response) => {
    const result = await new StaticModel("").add(res.locals.repo);
    res.status(201).json({ id: result });
  },

  updateRepository: async (_: Request, res: Response) => {
    const id = res.locals.id;
    const result = await new StaticModel("").updateByID(id, res.locals.repo);
    res.status(200).json({ id: result });
  },
};
