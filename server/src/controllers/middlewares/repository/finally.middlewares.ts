import { Request, Response } from "express";
import data_repo from "@/datas/static_data";
import repository, {Repositorys} from "@/core/repository";

import repositoryModel from "@/models/repository.model";

export default {
    getRepositorys: async (_: Request, res: Response) => {

        const config = res.locals.config;
        const repos = await repositoryModel.get(config);

        res.json(repos);
    },

    getOneRepository: async (_: Request, res: Response) => {
        
        const config = res.locals.config;
        const repos = await repositoryModel.get(config);

        res.json(repos);
    },

    deleteRepository: async (req: Request, res: Response) => {
        
        let count = 0;

        if(req.params.repoid !== undefined) {
            count = await repositoryModel.removeByID([ req.params.repoid ]);
        }

        res.json({delete: count});
    },
}

