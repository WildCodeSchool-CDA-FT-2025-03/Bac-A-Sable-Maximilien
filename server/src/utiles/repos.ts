import { ClientAddRepoRequest, QueryTypeRequest } from "@/types/client.types";
import {
  GitHubRepository,
  RepositorysFilter,
  create_url,
} from "@/core/repository";
import repository from "@/core/repository";

export function toGitHubRepository(
  data: ClientAddRepoRequest,
): GitHubRepository {
  const new_repo = {
    id: "",
    isPrivate: data.isPrivate,
    languages: [],
    url: create_url(data.user, data.name),
  } as GitHubRepository;

  repository.updateId(new_repo);

  return new_repo;
}

export function queryToRepositoryFields(
  query: QueryTypeRequest,
): RepositorysFilter {
  return query as RepositorysFilter;
}
