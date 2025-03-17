import { GitHubRepository, GitHubRepositoryLanguage, Repositories } from "@shared/repository.types"
import githubFetch from "./http/http_github";

type PartialGitHubRepo = {
    name: string,
    private: boolean,
    url: string,
    node_id: string,
    owner: {
        login: string,
        id: number,
    },
    description: string,
    created_at: string,
    language: string,
}

const getLangs = async (repo: PartialGitHubRepo): Promise<GitHubRepository> => {
    const data = await githubFetch.languages(repo.owner.login, repo.name);
    const langsOld = await data.json();
    const langs = Object.entries(langsOld).map(([l, s]) => {
            return {size: s, node:{name: l}} as GitHubRepositoryLanguage;
        });


    const repos: GitHubRepository = {
            id: repo.node_id,
            isPrivate: repo.private,
            url: repo.url,
            description: repo.description,
            createdAt: repo.created_at,
            primaryLanguage: {name: repo.language},
            languages: langs,
            name: repo.name,
            owner: {id: ""+repo.owner.id, login: repo.owner.login}
    };

    return repos;
};

const github = {
    async getRepository(userName: string) : Promise<Repositories> {

        const results = await githubFetch.repository(userName);
        const datas = await results.json() as PartialGitHubRepo[];

        const waiting = [];

        for(const r of datas) {
            waiting.push(getLangs(r));
        }

        return await Promise.all(waiting);;
    }
}

export default github;

