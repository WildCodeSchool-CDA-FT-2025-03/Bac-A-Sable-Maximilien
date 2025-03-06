import { Request, Response, NextFunction } from "express";
import repository from "@/core/repository";
import { RepositorysFilter } from "@/core/repository";

export const paramsFilter = (req: Request, res: Response, next: NextFunction) => {
    const repos = res.locals.data; 
    const filters =  res.locals.filters as RepositorysFilter;
    console.log("filters");
    console.log(filters);
    res.locals.data = repository.filter(repos, filters);

    next();
};