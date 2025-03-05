import { md5 } from "js-md5";
import { ClientAddRepoRequest } from "@/types/client.types";
import { GitHubRepository } from "@/types/github.types";

export function toGitHubRepository(data: ClientAddRepoRequest): GitHubRepository {
    let hash = md5.create();
    hash.update(data.user + data.name);

    return {
        id: hash.toString(),
        isPrivate: data.isPrivate,
        languages: [],
        url: "http://test",
    } as GitHubRepository;
}