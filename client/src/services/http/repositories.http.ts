import client from "@/services/client";

export const getAllRepos = () => {
    return client("/repos");
  };


export const getRepositoryByID = (id: string) => {
    return client(`/repos/${id}`);
};