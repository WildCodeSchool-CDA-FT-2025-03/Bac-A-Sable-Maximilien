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
