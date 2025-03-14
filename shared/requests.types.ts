import { Repositories } from "./repository.types";

export type ResponseRepositoryMetadata = {
    repositories: Repositories,
    total: number,
    languages: string[],
};