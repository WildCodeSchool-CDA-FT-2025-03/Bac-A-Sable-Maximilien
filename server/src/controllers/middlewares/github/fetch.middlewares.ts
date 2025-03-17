import { Request, Response } from "express";
import { GitHubModel } from "@/models/github.model";

export default {
  getRepositorys: async (_: Request, res: Response) => {
    const config = res.locals.config;
    const repos = await GitHubModel.new(config.owner);

    res.status(200).json(repos);
  },
};
