import repository from "@/controllers/middlewares/repository/repository";
import { Repositorys, GitHubRepository, Limit, RepositorysFilter, GetRepositorysConfig, PartialRepository, RepositoryFields } from "@/core/repository";
import { IRepository } from "@/core/repositorys.interface";
import static_data  from "@/datas/static_data.json"
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
    async add(repo: GitHubRepository): Promise<string> {
        StaticModel.repository.push(repo);
        return repo.id; 
    }


    async get(config: GetRepositorysConfig): Promise<Repositorys | PartialRepository[]> {
        let repos = StaticModel.filter(StaticModel.repository, config.filter);
        repos = StaticModel.slice(StaticModel.repository, config.limit);

        if(config.fields.length > 0) {
            return StaticModel.selectFields(StaticModel.repository, config.fields);
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
        StaticModel.repository
            .filter(r => {
                count+=1; 
                return !list_id.includes(r.id);
            });

        return count;
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
    private static filter (repos: Repositorys, filter: RepositorysFilter): Repositorys {
        if(Object.keys(filter).length === 0) {
            return repos;
        }
        
        const result = repos.filter((r) => {
            // Filter by ID if specified
            if(obj.exist(filter.id) && r.id !== filter.id) {
                return false;
            }

            // Filter by private status if specified
            if(obj.exist(filter.isPrivate)
                && r.isPrivate.toString() !== filter.isPrivate) {
                return false;
            }
    
            // Filter by URL if specified
            if(obj.exist(filter.url) && r.url !== filter.url) {
                return false;
            }

            // Filter by programming languages if specified
            if(filter.languages !== undefined) {
                const langs = r.languages.map(l => l.node.name);
                const langsList = filter.languages.split(',');
                const intersection = langsList
                            .filter(l => langs.includes(l));

                if(intersection.length !== langsList.length){
                    return false;
                }
            }
            
            return true;
        });

        return result;
    }

    private static slice(repos: Repositorys, limit?: Limit): Repositorys {
        if(limit === undefined) {
            return repos;
        }

        const start = limit.page * limit.count;
        const result = repos.slice(start, start + limit.count);

        return result;
    }

    private static selectFields(repos: Repositorys,  fields: RepositoryFields[]): PartialRepository[] {

        const result = repos.map(r => {
            return fields.reduce(
                (acc,f)=> {
                    return {...acc, [f]: r[f]}
                },{} as PartialRepository
            );
        });

        return result;
    }
}