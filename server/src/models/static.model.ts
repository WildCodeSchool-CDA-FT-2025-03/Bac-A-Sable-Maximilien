import {
  GitHubRepository,
  Repositories,
  ConstructGitHubRepository,
  Paging,
  RepositoriesFilter,
  GetRepositoriesConfig,
  PartialRepository,
  RepositoryFields,
  UpdateRepository,
} from "@shared/repository.types";
import { create_url, create_id } from "@/core/repository";
import { IRepository } from "@/core/repositorys.interface";
import static_data from "@/datas/static_data.json";
import obj from "@/utiles/obj";

/**
 * StaticModel implements the IRepository interface to provide a static in-memory
 * repository storage for GitHub repositories. This is primarily used for testing
 * and development purposes.
 */
export class StaticModel implements IRepository {
  /** Static array to store repository data in memory */
  private static repository = [...static_data];

  /**
   * Adds a new repository to the static storage
   * @param repo - The GitHub repository to add
   * @returns Promise resolving to the ID of the added repository
   */
  async add(repo: ConstructGitHubRepository): Promise<string> {
    // Create a new URL and ID for the repository
    const new_url = create_url(repo.user, repo.name);
    const new_id = create_id(new_url);

    // Check if the repository already exists by ID
    const exist = await this.existByID(new_id);

    if (!exist) {
      // If it doesn't exist, create a new repository object and add it to the static storage
      const new_repo = {
        isPrivate: repo.isPrivate,
        id: new_id,
        url: new_url,
        languages: [],
        createdAt: new Date().toISOString(),
        description: "",
        name: "",
        owner: { id: "", login: "" },
        primaryLanguage: { name: "" },
      } as GitHubRepository;
      StaticModel.repository.push(new_repo);
      return new_repo.id;
    } else {
      // Return an empty string if the repository already exists
      return "";
    }
  }

  /**
   * Retrieves repositories based on configuration
   * @param config - Configuration object containing filter, fields, and limit
   * @returns Promise resolving to filtered repositories or selected fields
   */
  async get(
    config: GetRepositoriesConfig,
  ): Promise<Repositories | PartialRepository[]> {
    // Filter repositories based on the provided filter criteria
    let repos = StaticModel.filter(StaticModel.repository, config.filter);

    // Apply pagination if a limit is specified
    if (config.limit.count > 0) {
      repos = StaticModel.slice(repos, config.limit);
    }

    // Select specific fields if specified
    if (config.fields.length > 0) {
      return StaticModel.selectFields(repos, config.fields);
    }

    return repos;
  }

  /**
   * Removes repositories by their IDs
   * @param list_id - Array of repository IDs to remove
   * @returns Promise resolving to the number of repositories removed
   */
  async removeByID(list_id: string[]): Promise<number> {
    let count = 0;

    // Filter out repositories with IDs in the list_id array
    StaticModel.repository = StaticModel.repository.filter((r) => {
      if (list_id.includes(r.id)) {
        count += 1;
        return false;
      }
      return true;
    });

    return count;
  }

  /**
   * Updates a repository's fields by its ID
   * @param id - ID of the repository to update
   * @param fields - Fields to update in the repository
   * @returns Promise resolving to true if the update was successful, false otherwise
   */
  async updateByID(id: string, fields: UpdateRepository): Promise<boolean> {
    // Find the repository by ID
    const repo = StaticModel.getByID(StaticModel.repository, id);

    if (repo) {
      // Merge the existing repository with the new fields
      Object.assign(repo, { ...repo, ...fields });
      return true;
    } else {
      return false;
    }
  }

  /**
   * Checks if a repository with the given ID exists
   * @param id - Repository ID to check
   * @returns Promise resolving to true if repository exists, false otherwise
   */
  async existByID(id: string): Promise<boolean> {
    return StaticModel.repository.some((r) => r.id === id);
  }

  /**
   * Filters repositories based on multiple criteria
   * @param repos - Repository collection to filter
   * @param filter - Filter criteria object containing optional id, isPrivate, url, and languages
   * @returns Filtered array of repositories that match ALL criteria
   */
  private static filter(
    repos: Repositories,
    filter: RepositoriesFilter,
  ): Repositories {
    if (Object.keys(filter).length === 0) {
      return repos;
    }

    const result = repos.filter((r) => {
      // Filter by ID if specified
      if (obj.exist(filter.id) && r.id !== filter.id) {
        return false;
      }

      // Filter by private status if specified
      if (
        obj.exist(filter.isPrivate) &&
        r.isPrivate.toString() !== filter.isPrivate
      ) {
        return false;
      }

      // Filter by URL if specified
      if (obj.exist(filter.url) && r.url !== filter.url) {
        return false;
      }

      // Filter by programming languages if specified
      if (filter.languages !== undefined && filter.languages !== "") {
        const langs = r.languages.map((l) => l.node.name);
        const langsList = filter.languages.split(",");
        const intersection = langsList.filter((l) => langs.includes(l));

        if (intersection.length !== langsList.length) {
          return false;
        }
      }

      return true;
    });

    return result;
  }

  /**
   * Slices the repository collection for pagination
   * @param repos - Repository collection to slice
   * @param limit - Limit object containing count and page for pagination
   * @returns Sliced array of repositories
   */
  private static slice(repos: Repositories, limit?: Paging): Repositories {
    if (limit === undefined) {
      return repos;
    }

    const start = limit.page * limit.count;
    const result = repos.slice(start, start + limit.count);

    return result;
  }

  /**
   * Selects specific fields from repositories
   * @param repos - Repository collection to process
   * @param fields - Array of fields to select
   * @returns Array of objects containing only the specified fields
   */
  private static selectFields(
    repos: Repositories,
    fields: RepositoryFields[],
  ): PartialRepository[] {
    const result = repos.map((r) => {
      return fields.reduce((acc, f) => {
        return { ...acc, [f]: r[f] };
      }, {} as PartialRepository);
    });

    return result;
  }

  /**
   * Finds a repository by its ID
   * @param repos - Repository collection to search
   * @param id - Repository ID to find
   * @returns The found repository or undefined
   */
  private static getByID(
    repos: Repositories,
    id: string,
  ): GitHubRepository | undefined {
    return repos.find((r) => r.id === id);
  }
}
