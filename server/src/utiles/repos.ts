import { ClientAddRepoRequest } from "@/types/client.types";
import {
  GitHubRepository,
} from "@shared/repository.types";

import { create_url, create_id } from "@/core/repository";

export function toGitHubRepository(
  data: ClientAddRepoRequest,
): GitHubRepository {
  const new_repo = {
    id: "",
    isPrivate: data.isPrivate,
    languages: [],
    url: create_url(data.user, data.name),
    createdAt: "",
    description: "",
    name: "",
    owner: {id: "", login: ""},
    primaryLanguage: {name: ""}
  } as GitHubRepository;

  new_repo.id = create_id(new_repo.url);

  return new_repo;
}

// export function queryToRepositoryFields(
//   query: QueryTypeRequest,
// ): RepositorysFilter {
//   return query as RepositorysFilter;
// }
