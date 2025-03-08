import { Request, Response } from "express";
import data_repo from "@/datas/static_data";
import repository, {Repositorys} from "@/core/repository";

export default {
    getRepositorys: (_: Request, res: Response) => {

        res.json(res.locals.datas);

    },

    getOneRepository: (_: Request, res: Response) => {
        
        if(res.locals.datas.length > 0) {
            res.json(res.locals.datas[0]);
        }
        else{
            //TODO: handle error
            res.send("error");
        }
    },

    deleteRepository: (_: Request, res: Response) => {
        
        if(res.locals.datas.length > 0) {
            const reposSelected = res.locals.datas as Repositorys
            const reposIdToDelete = reposSelected.map(r => r.id);
            const repos = data_repo.filter(r => !reposIdToDelete.includes(r.id));
            Object.assign(data_repo, repos);
        }
        res.send("ok");
    },
}

