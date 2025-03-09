import { Repositorys, GitHubRepository, GetRepositorysConfig, PartialRepository } from "./repository";


export interface IRepository {
    add(repo: GitHubRepository): Promise<string>;

    get(config: GetRepositorysConfig) : Promise<Repositorys | PartialRepository[]>;

    removeByID(list_id: string[]): Promise<number>;
    
    existByID(id: string): Promise<boolean>;
}