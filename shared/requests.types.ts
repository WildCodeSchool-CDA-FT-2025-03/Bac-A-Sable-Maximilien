import { Repositories } from "./repository.types";

export type ResponseRepositoryMetadata = {
    owner: string,
    repositories: Repositories,
    total: number,
    languages: string[],
};