import { ClientAddRepoRequest } from "@/types/client.types";
import { GitHubRepository } from "@/core/repository";
import repository from "@/core/repository";

export function toGitHubRepository(data: ClientAddRepoRequest): GitHubRepository {

    const new_repo = {
        id: "",
        isPrivate: data.isPrivate,
        languages: [],
        url: "http://test",
    } as GitHubRepository;

    repository.updateId(new_repo);

    return new_repo;
}