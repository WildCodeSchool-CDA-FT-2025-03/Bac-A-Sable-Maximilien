import { md5 } from "js-md5";

/**
 * Represents a GitHub repository with its core properties
 */
export type GitHubRepository = {
    id: string,
    isPrivate: boolean,
    languages: GitHubRepositoryLanguage[],
    url: string,
};

/**
 * Represents a programming language in a GitHub repository with size information
 */
export type GitHubRepositoryLanguage = {
    size: number,
    node: {
        name: string,
    }
};

/**
 * Valid field names for GitHubRepository type
 * Used for field selection operations
 */
export type RepositoryFields = "id" | "isPrivate" | "languages" | "url";


/**
 * Filter criteria for searching repositories
 * All properties are optional for partial matching
 */
export type RepositorysFilter = {
    id?: string,
    isPrivate?: boolean,
    languages?: string,
    url?: string,
};

export type Repositorys = GitHubRepository[];

/**
 * Generates a GitHub repository URL from username and repository name
 * @param user - GitHub username or organization name
 * @param repo_name - Repository name
 * @returns Full GitHub URL in format: https://github.com/{user}/{repo_name}
 */
export const create_url = (user: string, repo_name: string): string => {
    return `https://github.com/${user}/${repo_name}`;
}

/**
 * Main repository management class with static CRUD operations
 */
export default class {
    static readonly AcceptFilterRepository: string[] = [
        "id", "isPrivate", "languages", "url"
    ];

    /**
     * Adds a new repository to the collection if it doesn't exist
     * @param repos - Existing repository collection
     * @param new_repo - Repository to add
     * @returns True if added, false if already exists
     */
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

    /**
     * Checks if a repository exists in the collection by ID match
     * @param repos - Repository collection to search
     * @param repo - Repository to check
     * @returns True if repository exists in collection
     */
    static exist (repos: Repositorys, repo: GitHubRepository): boolean {
        const result = repos.findIndex(r => {
            return r.id === repo.id;
        });

        return result !== -1;
    }

    /**
     * Finds a repository by its ID
     * @param repos - Repository collection to search
     * @param id - Repository ID to find
     * @returns The found repository or undefined
     */
    static findId (repos: Repositorys, id: string): GitHubRepository | undefined {
        return repos.find(r => {
            return r.id === id;
        });
    }

    /**
     * Filters repositories based on multiple criteria
     * @param repos - Repository collection to filter
     * @param filter - Filter criteria object
     * @returns Filtered array of repositories that match ALL criteria
     */
    static filter (repos: Repositorys, filter: RepositorysFilter): Repositorys {
        
        if(filter === undefined) {
            return repos;
        }

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
                    const langsList = filter.languages.split(',');
                    const intersection = langsList
                                .filter(l => langs.includes(l));

                    if(intersection.length !== langsList.length){
                        return false;
                    }
                }
            }

            return true;
        });

        return result;
    }

    /**
     * Selects specific fields from repositories
     * @param repos - Repository collection to process
     * @param fields - Array of fields to select
     * @returns Array of objects containing only the specified fields
     */
    static selectFields(repos: Repositorys,  fields: RepositoryFields[]): RepositorysFilter[] {
        //TODO: check any
        const result = repos.map((r) => {
            const new_repo = {} as any;

            for(const f of fields) {
                new_repo[f] = (r)[f] as any;
            }

            return new_repo;
        });

        return result;
    }

    /**
     * Updates repository ID using MD5 hash of its URL
     * @param repo - Repository object to modify
     */
    static updateId(repo: GitHubRepository) {
        repo.id = createID(repo);
    }
}

/**
 * Generates a unique ID for a repository using MD5 hash of its URL
 * @param repo - Repository object containing the URL
 * @returns MD5 hash string of the repository URL
 */
function createID(repo: GitHubRepository): string {
    const hash = md5.create();
    hash.update(repo.url);
    return hash.toString();
}
