import { Repositories } from "@shared/repository.types";
import { RepoCard } from "@/components/RepoCard/RepoCard";
import { DisplayType } from "../ToolsBar/ToolsBar";
import "./RepositoriesList.css"

type RepositoriesListProps = {
    repos: Repositories;
    display: DisplayType;
}

export const RepositoriesList = (props: RepositoriesListProps) => {
    const repos: Repositories = props.repos;
    const display: DisplayType = props.display;

    return (
        <div className={
            display === "list" ? "repository_list" : "repository_grid"}>
            {
                repos.map(r => <RepoCard key={r.id} repo={r}></RepoCard>)
            }
        </div>
    )
}