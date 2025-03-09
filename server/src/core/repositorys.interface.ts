import { Repositorys, UpdateRepository, ConstructGitHubRepository, GetRepositorysConfig, PartialRepository } from "./repository";


export interface IRepository {
    add(repo: ConstructGitHubRepository): Promise<string>;

    get(config: GetRepositorysConfig) : Promise<Repositorys | PartialRepository[]>;

    removeByID(list_id: string[]): Promise<number>;
    
    existByID(id: string): Promise<boolean>;

    updateByID(id: string, fields: UpdateRepository): Promise<boolean>;
}