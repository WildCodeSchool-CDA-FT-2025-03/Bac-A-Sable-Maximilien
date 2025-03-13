import { Repositories } from "./repository.types";

export type ResponseRepository = {
    repositories: Repositories,
    total: number,
    languages: string[],
};