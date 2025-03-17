import {
  GitHubRepository,
  Repositories,
  Paging,
  RepositoriesFilter,
  PartialRepository,
  RepositoryFields,
} from "@shared/repository.types";

import obj from "@/utiles/obj";

/**
 * Filters repositories based on multiple criteria
 * @param repos - Repository collection to filter
 * @param filter - Filter criteria object containing optional id, isPrivate, url, and languages
 * @returns Filtered array of repositories that match ALL criteria
 */
export function filter(
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

    const langs = r.languages.map((l) => l.node.name.toLowerCase());

    // Filter by programming languages if specified
    if (filter.languages !== undefined && filter.languages !== "") {
      const langsList = filter.languages
        .split(",")
        .map((l) => l.trim().toLowerCase());
      const intersection = langsList.filter((l) => langs.includes(l));

      if (intersection.length !== langsList.length) {
        return false;
      }
    }

    if (filter.filterLanguages !== undefined && filter.filterLanguages !== "") {
      const langsFilter = filter.filterLanguages.toLowerCase().split(",");

      for (const lang of langsFilter) {
        if (langs.includes(lang)) {
          return false;
        }
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
export function slice(repos: Repositories, limit?: Paging): Repositories {
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
export function selectFields(
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
export function getByID(
  repos: Repositories,
  id: string,
): GitHubRepository | undefined {
  return repos.find((r) => r.id === id);
}
