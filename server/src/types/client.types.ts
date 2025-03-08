import { RepositoryFields, RepositorysFilter } from "@/core/repository";

export type ClientAddRepoRequest = {
    name: string,
    isPrivate: boolean,
    user: string,
};

export type QueryTypeRequest = RepositoryFields | "fields";

export type GetRepositoryRequest = {
        filter?: RepositorysFilter,
        fields?: RepositoryFields[],
};