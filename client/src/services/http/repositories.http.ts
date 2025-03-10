import client from "../client";
import { Repositories } from "@shared/repository.types";

export const getAllRepos = async (): Promise<Repositories> => {
    try {
        const repos = await client("/repos");
        return repos.data;
    }
    catch {
        return [];
    }
  };