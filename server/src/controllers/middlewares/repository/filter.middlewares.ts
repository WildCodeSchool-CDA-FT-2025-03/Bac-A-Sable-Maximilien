import { Request, Response, NextFunction } from "express";
import repository from "@/core/repository";

export default {
    fields: (_: Request, res: Response, next: NextFunction) => {
        const repos = res.locals.datas; 
        const fields =  res.locals.config.fields;

        if(fields !== undefined) {
            res.locals.datas = repository.selectFields(repos, fields);
        }
        next();
    },

    limit: (_: Request, res: Response, next: NextFunction) => {
        const repos = res.locals.datas; 
        const filters =  res.locals.config.filter;

        if(filters.limit !== undefined) {
            const page = filters.page ? +filters.page : 0;
            res.locals.datas = repository.slice(repos, +filters.limit, page);
        }

        next();
    },

    match: (_: Request, res: Response, next: NextFunction) => {
        const repos = res.locals.datas;
        const filters =  res.locals.config.filter;

        res.locals.datas = repository.filter(repos, filters);
        
        next();
    },
}
