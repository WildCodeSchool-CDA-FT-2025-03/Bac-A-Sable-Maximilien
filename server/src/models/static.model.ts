import { Repositorys, GitHubRepository, RepositoryFields, RepositorysFilter } from "@/core/repository";
import { IRepository } from "@/core/repositorys.interface";
import static_data  from "@/datas/static_data"

export class StaticModel implements IRepository {

    private static repository = {...static_data} as Repositorys;

    async add(repo: GitHubRepository): Promise<string> {
        StaticModel.repository.push(repo);
        return repo.id; 
    }

    async get(filter: RepositorysFilter, fields: RepositoryFields[]): Promise<Repositorys> {
        const repos = StaticModel.filter(StaticModel.repository, filter);
        return repos;
    }

    async removeByID(list_id: string[]): Promise<number> {
        let count = 0;
        StaticModel.repository
            .filter(r => {
                count+=1; 
                return !list_id.includes(r.id);
            });

        return count;
    }

    async existByID(id: string): Promise<boolean> {
        return StaticModel.repository.some((r) => r.id === id);
    }

    /**
     * Filters repositories based on multiple criteria
     * @param repos - Repository collection to filter
     * @param filter - Filter criteria object
     * @returns Filtered array of repositories that match ALL criteria
     */
    static filter (repos: Repositorys, filter: RepositorysFilter): Repositorys {

        if(filter === undefined) {
            return repos;
        }

        const filtersKeys = Object.keys(filter);

        const result = repos.filter((r) => {

            if(filtersKeys.includes("id")) {
                if(r.id !== filter.id) {
                    return false;
                }
            }
            if(filtersKeys.includes("isPrivate")) {
                if(r.isPrivate !== filter.isPrivate) {
                    return false;
                }
            }
            if(filtersKeys.includes("url")) {
                if(r.url !== filter.url) {
                    return false;
                }
            }
            if(filtersKeys.includes("languages")) {
                if(filter.languages !== undefined) {
                    const langs = r.languages.map(l => l.node.name);
                    const langsList = filter.languages.split(',');
                    const intersection = langsList
                                .filter(l => langs.includes(l));

                    if(intersection.length !== langsList.length){
                        return false;
                    }
                }
            }

            return true;
        });

        return result;
    }
}