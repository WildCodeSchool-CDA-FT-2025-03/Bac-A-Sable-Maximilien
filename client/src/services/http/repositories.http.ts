import client from "@/services/client";
import { Paging } from "@shared/repository.types";
import { ConstructGitHubRepository } from "@shared/repository.types";

const toParams = (filter: string[]) => {
    return "filterLanguages=" +filter.map(l => `${l}`).join(",");
}

export const getAllRepos = (paging: Paging, filter: string[] = []) => {
    let params = "";

    if(filter.length > 0) {
        params = toParams(filter);
    }
    return client.get(`/repos/metadata?limit=${paging.count}&page=${paging.page}&${params}`);
};


export const getRepositoryByID = (id: string) => {
    return client.get(`/repos/${id}`);
};

export const addRepository = (repo: ConstructGitHubRepository) => {
  return client.post(`/repos`, repo);
};