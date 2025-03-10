import { RepositoryFields } from "@/core/repository.types";

export type ClientAddRepoRequest = {
  name: string;
  isPrivate: boolean;
  user: string;
};

export type QueryTypeRequest = RepositoryFields | "fields";
