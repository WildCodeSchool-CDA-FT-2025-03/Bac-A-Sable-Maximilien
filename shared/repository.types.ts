/**
 * Represents a GitHub repository with its core properties
 * - `id`: Unique identifier for the repository
 * - `isPrivate`: Boolean indicating if the repository is private
 * - `languages`: Array of programming languages used in the repository
 * - `url`: URL of the repository on GitHub
 */
export type GitHubRepository = {
  id: string;
  isPrivate: boolean;
  languages: GitHubRepositoryLanguage[];
  url: string;
};

/**
 * Represents the necessary information to construct a new GitHub repository
 * - `user`: GitHub username or organization name
 * - `name`: Name of the repository
 * - `isPrivate`: Boolean indicating if the repository should be private
 */
export type ConstructGitHubRepository = {
  user: string;
  name: string;
  isPrivate: boolean;
  //languages: GitHubRepositoryLanguage[],
};

/**
 * Represents a programming language in a GitHub repository with size information
 * - `size`: Size of the code written in this language
 * - `node.name`: Name of the programming language
 */
export type GitHubRepositoryLanguage = {
  size: number;
  node: {
    name: string;
  };
};

/**
 * Represents fields that can be updated in a GitHub repository
 * Excludes `id` and `url` as they are immutable
 */
export type UpdateRepository = Partial<Omit<GitHubRepository, "id" | "url">>;

/**
 * Valid field names for GitHubRepository type
 * Used for field selection operations
 */
export type RepositoryFields = "id" | "isPrivate" | "languages" | "url";

/**
 * Filter criteria for searching repositories
 * All properties are optional for partial matching
 * - `id`: Filter by repository ID
 * - `isPrivate`: Filter by privacy status
 * - `languages`: Filter by programming languages
 * - `url`: Filter by repository URL
 * - `limit`: Limit the number of results
 */
export type RepositoriesFilter = {
  id?: string;
  isPrivate?: string;
  languages?: string;
  url?: string;
  limit?: number;
};

/**
 * Represents a collection of GitHub repositories
 */
export type Repositories = GitHubRepository[];

/**
 * Represents a partial view of a GitHub repository
 * Allows for partial updates and field selection
 */
export type PartialRepository = Partial<GitHubRepository>;

/**
 * Represents pagination limits
 * - `count`: Number of items per page
 * - `page`: Page number (0-based index)
 */
export type Paging = {
  count: number;
  page: number;
};

/**
 * Configuration for retrieving repositories
 * - `filter`: Criteria to filter repositories
 * - `fields`: Fields to include in the results
 * - `limit`: Pagination limits
 */
export class GetRepositoriesConfig {
  filter: RepositoriesFilter = {};
  fields: RepositoryFields[] = [];
  limit: Paging = { count: 0, page: 0 };
}
