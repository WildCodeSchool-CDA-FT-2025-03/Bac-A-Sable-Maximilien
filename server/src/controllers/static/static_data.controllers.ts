import express, { Request, Response } from "express";

import staticData from '../../data/static_data.json';
import { GitHubRepository } from "../../types/github.types";
import { ClientAddRepoRequest } from "../../types/client.types";
import { toGitHubRepository } from "../../utiles/repos";

const StaticContoller = {
    getAllRepository: (_: Request, res: Response) => {
        res.status(200).json(staticData);
    },

    findRepositoryWithID: (req: Request, res: Response) => {
        const repo_id = req.params.reposid;
    
        const repo = staticData.find(r => {
            return r.id === repo_id
        }) as GitHubRepository;
    
        if(repo) {
            res.status(200).json(repo);
        }
        else {
            res.status(500).json(`repository with id ${repo_id} dosn't exist`);
        }
    },

    addRepository: (req: Request, res: Response) => {
        const data = toGitHubRepository(req.body as ClientAddRepoRequest);
        staticData.push(data);
        res.status(200).send(data.id);
    },
}

export default StaticContoller;
