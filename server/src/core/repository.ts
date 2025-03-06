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


export type RepositoryFields = "id" | "isPrivate" | "languages" | "url";

export type RepositorysFilter = {
    id?: string,
    isPrivate?: boolean,
    languages?: string,
    url?: string,
};

export type Repositorys = GitHubRepository[];


export const create_url = (user: string, repo_name: string): string => {
    return `https://github.com/${user}/${repo_name}`;
}

export default class {
    static add (repos: Repositorys, new_repo: GitHubRepository): boolean {
        const result = this.exist(repos, new_repo);
        if(result === false) {
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

    static filter (repos: Repositorys, filter: RepositorysFilter): Repositorys {
        const filtersKeys = Object.keys(filter);

        const result = repos.filter((r) => {

            if(filtersKeys.includes("id")) {
                if(r.id !== filter.id) {
                    return false;
                }
            }
            if(filtersKeys.includes("isPrivate")) {
                if(r.isPrivate !== filter.isPrivate) {
                    return false;
                }
            }
            if(filtersKeys.includes("url")) {
                if(r.url !== filter.url) {
                    return false;
                }
            }
            if(filtersKeys.includes("languages")) {
                if(filter.languages !== undefined) {
                    const langs = r.languages.map(l => l.node.name);
                    const intersection = filter.languages
                                .split(',')
                                .filter(l => langs.includes(l));

                    if(intersection.length === 0){
                        return false;
                    }
                }
            }

            return true;
        });

        return result;
    }

    static selectFields(repos: Repositorys,  fields: RepositoryFields[]): RepositorysFilter[] {
        const result = repos.map((r) => {
            const new_repo = {} as any;

            for(const f of fields) {
                new_repo[f] = (r as any)[f];
            }

            return new_repo;
        });

        return result;
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
