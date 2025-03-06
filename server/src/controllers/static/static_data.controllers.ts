import { Request, Response } from "express";

import staticData from '@/datas/static_data.json';
import repository, { GitHubRepository } from "@/core/repository";

const StaticContoller = {
    getAllRepository: (_: Request, res: Response) => {
        res.status(200).json(staticData);
    },

    findRepositoryWithID: (req: Request, res: Response) => {
        const repo_id = req.params.reposid;
    
        const repo = repository.findId(staticData, repo_id);
    
        if(repo) {
            res.status(200).json(repo);
        }
        else {
            res.status(500).json(`repository with id ${repo_id} dosn't exist`);
        }
    },

    addRepository: (_: Request, res: Response) => {
        const data = res.locals.data as GitHubRepository;
        
        const result = repository.add(staticData, data);

        if(result)
        res.status(200).send(data.id);
    },
}

export default StaticContoller;
