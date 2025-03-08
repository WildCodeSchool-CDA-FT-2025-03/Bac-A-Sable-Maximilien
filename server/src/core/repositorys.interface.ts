import { Repositorys, GitHubRepository, RepositoryFields, RepositorysFilter } from "./repository";


export interface IRepository {
    add(repo: GitHubRepository): Promise<string>;

    get(filter: RepositorysFilter, fields: RepositoryFields[]) : Promise<Repositorys>;

    removeByID(list_id: string[]): Promise<number>;
    
    existByID(id: string): Promise<boolean>;
}