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

export type ConstructGitHubRepository = {
    user: string,
    name: string,
    isPrivate: boolean,
    //languages: GitHubRepositoryLanguage[],
}

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
    isPrivate?: string,
    languages?: string,
    url?: string,
    limit?: number,
};

export type Repositorys = GitHubRepository[];

export type PartialRepository = Partial<GitHubRepository>;

export type Limit = {
    count: number,
    page: number,
}

export class GetRepositorysConfig {
    filter: RepositorysFilter = {};
    fields: RepositoryFields[] = [];
    limit: Limit = {count: 0, page: 0};
};

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
 * Repository Manager Class
 * 
 * A static utility class that provides comprehensive CRUD (Create, Read, Update, Delete) operations
 * for managing GitHub repositories. This class handles repository collections with features including:
 * - Adding and removing repositories
 * - Filtering and searching repositories
 * - Field selection and pagination
 * - Repository updates and ID management
 * 
 * The class uses immutable operations where possible and maintains type safety through
 * TypeScript interfaces and types.
 */
export default class {
    /**
     * List of valid filter fields that can be used when querying repositories
     * These fields correspond to the properties in GitHubRepository type
     */
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
            }/*
            if(filtersKeys.includes("isPrivate")) {
                if(r.isPrivate !== filter.isPrivate) {
                    return false;
                }
            }*/
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

        const result = repos.map(r => {
            return fields.reduce(
                (acc,f)=> {
                    return {...acc, [f]: r[f]}
                },{} as RepositorysFilter
            );
        });

        return result;
    }

    /**
     * Deletes a repository from the collection by its ID
     * @param repos - Repository collection to modify
     * @param id - ID of the repository to delete
     * @remarks This method modifies the original array using splice
     */
    static deleteByID(repos: Repositorys, id: string) {
        const index = repos.findIndex(r => {
            return r.id === id;
        });

        if(index !== -1) {
            repos = repos.splice(index, 1);
        }
    }

    /**
     * Returns a slice of repositories for pagination
     * @param repos - Repository collection to slice
     * @param count - Number of repositories to return per page
     * @param page - Page number (0-based index)
     * @returns Array of repositories for the specified page
     */
    static slice(repos: Repositorys, count: number, page: number = 0): Repositorys {
        const start = page * count;
        const result = repos.slice(start, start + count);
        return result;
    }

    /**
     * Updates a repository's properties by ID
     * @param repos - Repository collection to update
     * @param update - Partial repository object containing the fields to update
     * @param id - ID of the repository to update
     * @remarks This method performs a shallow merge of the update object with the existing repository
     */
    static updateRepo(repos: Repositorys, update: PartialRepository, id: string) {
        const repo_find = repos.find(r => {
            return r.id === id;
        });
        if(repo_find){
            Object.assign(repo_find, {...repo_find, ...update } as GitHubRepository);
        }
    }

    /**
     * Updates repository ID using MD5 hash of its URL
     * @param repo - Repository object to modify
     */
    static updateId(repo: GitHubRepository) {
        repo.id = createID(repo.url);
    }
}

/**
 * Generates a unique ID for a repository using MD5 hash of its URL
 * @param repo - Repository object containing the URL
 * @returns MD5 hash string of the repository URL
 */
export function createID(url: string): string {
    const hash = md5.create();
    hash.update(url);
    return hash.toString();
}
