import express, { Request, Response } from "express";

import { GitHubRepository } from "../../types/github.types";
import staticData from '../../data/static_data.json';

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
        console.log(req.body);
        res.status(200).send(req.body);
    },
}

export default StaticContoller;
