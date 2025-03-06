import { ClientAddRepoRequest } from "@/types/client.types";
import { GitHubRepository } from "@/core/repository";
import repository, {create_url} from "@/core/repository";

export function toGitHubRepository(data: ClientAddRepoRequest): GitHubRepository {

    const new_repo = {
        id: "",
        isPrivate: data.isPrivate,
        languages: [],
        url: create_url(data.user, data.name),
    } as GitHubRepository;

    repository.updateId(new_repo);

    return new_repo;
}