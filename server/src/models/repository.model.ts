import {
  Repositories,
  GetRepositoriesConfig,
  PartialRepository,
} from "@shared/repository.types";
import { ResponseRepositoryMetadata } from "@shared/requests.types";

import { filter, slice, selectFields } from "@/utiles/repositorie.utiles";

export class RepositoriesModel {
  private owner: string = "";
  protected repositories: Repositories = [];

  constructor(owner: string) {
    this.owner = owner;
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
    let repos = filter(this.repositories, config.filter);

    // Apply pagination if a limit is specified
    if (config.limit.count > 0) {
      repos = slice(repos, config.limit);
    }

    // Select specific fields if specified
    if (config.fields.length > 0) {
      return selectFields(repos, config.fields);
    }

    return repos;
  }

  /**
   * Retrieves repositories with metadata, based on configuration
   * @param config - Configuration object containing filter, fields, and limit
   * @returns Promise resolving to filtered repositories or selected fields
   */
  async getWithMetadata(
    config: GetRepositoriesConfig,
  ): Promise<ResponseRepositoryMetadata> {
    let repos = this.repositories;

    const langs = repos
      .reduce((acc, r) => {
        const lang = r.languages
          .filter((l) => !acc.includes(l.node.name.trim().toLowerCase()))
          .map((l) => l.node.name.trim().toLowerCase());
        return acc.concat(lang);
      }, [] as string[])
      .sort();

    // Filter repositories based on the provided filter criteria
    repos = filter(this.repositories, config.filter);

    const count = repos.length;

    // Apply pagination if a limit is specified
    if (config.limit.count > 0) {
      repos = slice(repos, config.limit);
    }

    return {
      owner: this.owner,
      repositories: repos,
      languages: langs,
      total: count,
    };
  }

  /**
   * Checks if a repository with the given ID exists
   * @param id - Repository ID to check
   * @returns Promise resolving to true if repository exists, false otherwise
   */
  async existByID(id: string): Promise<boolean> {
    return this.repositories.some((r) => r.id === id);
  }
}
