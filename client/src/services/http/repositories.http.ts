import client from "@/services/client";
import { Paging } from "@shared/repository.types";
import { ConstructGitHubRepository } from "@shared/repository.types";

export const getAllRepos = (paging: Paging) => {
    return client.get(`/repos?limit=${paging.count}&page=${paging.page}`);
  };


export const getRepositoryByID = (id: string) => {
    return client.get(`/repos/${id}`);
};

export const addRepository = (repo: ConstructGitHubRepository) => {
  return client.post(`/repos`, repo);
};