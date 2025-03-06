import { md5 } from "js-md5";

export type GitHubRepository = {
    id: string,
    isPrivate: boolean,
    languages: GitHubRepositoryLanguage[],
    url: string,
};

export type GitHubRepositoryLanguage = {
    size: number,
    node: {
        name: string,
    }
};

export type Repositorys = GitHubRepository[];


export const create_url = (user: string, repo_name: string): string => {
    return `https://github.com/${user}/${repo_name}`;
}

export default class {
    static add (repos: Repositorys, new_repo: GitHubRepository): boolean {
        const result = this.exist(repos, new_repo);
        if(result) {
            repos.push(new_repo);
            return true;
        }
        else {
            return false;
        }
    }

    static exist (repos: Repositorys, repo: GitHubRepository): boolean {
        const result = repos.findIndex(r => {
            return r.id === repo.id;
        });

        return result !== -1;
    }

    static findId (repos: Repositorys, id: string): GitHubRepository | undefined {
        return repos.find(r => {
            return r.id === id;
        });
    }

    static updateId(repo: GitHubRepository) {
        repo.id = createID(repo);
    }
}

function createID(repo: GitHubRepository): string {
    const hash = md5.create();
    hash.update(repo.url);
    return hash.toString();
}