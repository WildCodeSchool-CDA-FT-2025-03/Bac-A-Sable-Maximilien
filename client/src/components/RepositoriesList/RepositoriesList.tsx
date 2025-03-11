import { Repositories } from "@shared/repository.types";
import { RepoCard } from "@/components/RepoCard/RepoCard";
import "./RepositoriesList.css"

type RepositoriesListProps = {
    repos: Repositories
}

export const RepositoriesList = (props: RepositoriesListProps) => {
    const repos: Repositories = props.repos;

    return (
        <div className="repository_list">
            {
                repos.map(r => <RepoCard repo={r}></RepoCard>)
            }
        </div>
    )
}