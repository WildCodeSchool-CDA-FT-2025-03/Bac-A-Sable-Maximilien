import {
  GitHubRepository,
  ConstructGitHubRepository,
  UpdateRepository,
} from "@shared/repository.types";
import { create_url, create_id } from "@/core/repository";
import static_data from "@/datas/static_data.json";
import { getByID } from "@/utiles/repositorie.utiles";

import { RepositoriesModel } from "./repository.model";

const repos = [...static_data];
/**
 * StaticModel implements the IRepository interface to provide a static in-memory
 * repository storage for GitHub repositories. This is primarily used for testing
 * and development purposes.
 */
export class StaticModel extends RepositoriesModel {
  constructor() {
    super();
    this.repositories = repos;
  }

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
    const exist = await super.existByID(new_id);

    if (!exist) {
      // If it doesn't exist, create a new repository object and add it to the static storage
      const new_repo = {
        isPrivate: repo.isPrivate,
        id: new_id,
        url: new_url,
        languages: [],
        createdAt: new Date().toISOString(),
        description: "",
        name: repo.name,
        owner: { id: "", login: repo.user },
        primaryLanguage: { name: "" },
      } as GitHubRepository;
      this.repositories.push(new_repo);
      return new_repo.id;
    } else {
      // Return an empty string if the repository already exists
      return "";
    }
  }

  /**
   * Removes repositories by their IDs
   * @param list_id - Array of repository IDs to remove
   * @returns Promise resolving to the number of repositories removed
   */
  async removeByID(list_id: string[]): Promise<number> {
    let count = 0;

    // Filter out repositories with IDs in the list_id array
    this.repositories = this.repositories.filter((r) => {
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
    const repo = getByID(this.repositories, id);

    if (repo) {
      // Merge the existing repository with the new fields
      Object.assign(repo, { ...repo, ...fields });
      return true;
    } else {
      return false;
    }
  }
}
