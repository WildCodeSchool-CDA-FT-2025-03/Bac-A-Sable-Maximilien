import { GitHubRepository } from "@shared/repository.types";
import "./RepoCard.css"

type RepoCardProps = {
    repo: GitHubRepository
}

export const RepoCard = (props: RepoCardProps) => {
    const repo = props.repo;

    return (
        <div className="repo_card">
            <h2>{repo.url}</h2>
        </div>
    )
}