import { Request, Response, NextFunction } from "express";
import repository from "@/core/repository";
import { RepositorysFilter } from "@/core/repository";

export const paramsFilter = (req: Request, res: Response, next: NextFunction) => {
    const repos = res.locals.data; 
    const filters =  res.locals.filters as RepositorysFilter;
    
    res.locals.data = repository.filter(repos, filters);

    next();
};

export const limit = (req: Request, res: Response, next: NextFunction) => {
    const repos = res.locals.repository; 
    const filters =  res.locals.filters;
    const page = filters.page ? +filters.page : 0;
    res.locals.repository = repository.slice(repos, +filters.limit, page);

    next();
};


