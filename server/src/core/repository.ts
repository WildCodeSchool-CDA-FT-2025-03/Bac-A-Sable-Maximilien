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


export type UpdateRepository = Partial<Omit<GitHubRepository, "id" | "url">>

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
 * Generates a unique ID for a repository using MD5 hash of its URL
 * @param repo - Repository object containing the URL
 * @returns MD5 hash string of the repository URL
 */
export function createID(url: string): string {
    const hash = md5.create();
    hash.update(url);
    return hash.toString();
}
