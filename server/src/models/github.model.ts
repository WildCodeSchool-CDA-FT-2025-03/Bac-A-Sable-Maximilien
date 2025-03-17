import { RepositoriesModel } from "./repository.model";
import { Repositories } from "@shared/repository.types";
import github from "@/services/github.service";

export class GitHubModel extends RepositoriesModel {

    static async new(user: string): Promise<GitHubModel> {
        const repos = await github.getRepository(user);
        const model = new GitHubModel();
        model.setRepositories(repos);
        return model;
    }

    constructor() {
        super()
    }

    setRepositories(repos: Repositories) {
        this.repositories = repos;
    }
}