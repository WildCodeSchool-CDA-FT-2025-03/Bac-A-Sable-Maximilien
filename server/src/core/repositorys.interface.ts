import {
  Repositories,
  UpdateRepository,
  ConstructGitHubRepository,
  GetRepositoriesConfig,
  PartialRepository,
} from "@shared/repository.types";

export interface IRepository {
  add(repo: ConstructGitHubRepository): Promise<string>;

  get(
    config: GetRepositoriesConfig,
  ): Promise<Repositories | PartialRepository[]>;

  removeByID(list_id: string[]): Promise<number>;

  existByID(id: string): Promise<boolean>;

  updateByID(id: string, fields: UpdateRepository): Promise<boolean>;
}
