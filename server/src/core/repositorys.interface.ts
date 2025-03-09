import { Repositorys, ConstructGitHubRepository, GetRepositorysConfig, PartialRepository } from "./repository";


export interface IRepository {
    add(repo: ConstructGitHubRepository): Promise<string>;

    get(config: GetRepositorysConfig) : Promise<Repositorys | PartialRepository[]>;

    removeByID(list_id: string[]): Promise<number>;
    
    existByID(id: string): Promise<boolean>;
}