import client from "@/services/client";
import { Paging } from "@shared/repository.types";


export const getAllRepos = (paging: Paging) => {
    return client(`/repos?limit=${paging.count}&page=${paging.page}`);
  };


export const getRepositoryByID = (id: string) => {
    return client(`/repos/${id}`);
};