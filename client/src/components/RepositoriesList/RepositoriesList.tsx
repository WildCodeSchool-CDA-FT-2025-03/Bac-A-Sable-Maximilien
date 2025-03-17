import { Repositories } from "@shared/repository.types";
import { RepoCard } from "@/components/RepoCard/RepoCard";
import useUser from "@/contexts/userContext";
import "./RepositoriesList.css"

type RepositoriesListProps = {
    repos: Repositories;
}

export const RepositoriesList = (props: RepositoriesListProps) => {
    const repos: Repositories = props.repos;
    const {displayCard} = useUser();

    return (
        <div className="test-center">
        <div className={
            displayCard === "list" ? "repository_list" : "repository_grid"}>
            {
                repos.map(r => <RepoCard key={r.id} repo={r}></RepoCard>)
            }
        </div>
        </div>
    )
}