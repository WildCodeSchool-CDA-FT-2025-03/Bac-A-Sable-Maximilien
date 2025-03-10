import { RepositoryFields } from "@shared/repository.types";

export type ClientAddRepoRequest = {
  name: string;
  isPrivate: boolean;
  user: string;
};

export type QueryTypeRequest = RepositoryFields | "fields";
