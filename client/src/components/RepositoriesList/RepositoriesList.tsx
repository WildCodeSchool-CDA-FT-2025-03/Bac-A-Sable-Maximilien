import { Repositories } from "@shared/repository.types";
import { RepoCard } from "@/components/RepoCard/RepoCard";
import useUser from "@/contexts/userContext";
import "./RepositoriesList.css"

type RepositoriesListProps = {
    repos: Repositories;
}

export const RepositoriesList = (props: RepositoriesListProps) => {
    let repos: Repositories = props.repos;
    const {displayCard, hiddenUser, paging} = useUser();

    if(repos.length > paging.count) {
        const start = paging.count * paging.page;
        repos = repos.slice(start, start+(!paging.count ? repos.length : paging.count));
    }

    return (
        <div className="test-center">
        <div className={
            displayCard === "list" ? "repository_list" : "repository_grid"}>
            {
                repos.filter(e => {
                    return !hiddenUser.includes(e.owner.login)
                }).map(r => <RepoCard key={r.id} repo={r}></RepoCard>)
            }
        </div>
        </div>
    )
}