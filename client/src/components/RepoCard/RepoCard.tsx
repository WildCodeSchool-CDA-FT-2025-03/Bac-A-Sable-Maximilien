import { GitHubRepository } from "@shared/repository.types";
import { Link } from "react-router-dom";
import "./RepoCard.css"

type RepoCardProps = {
    repo: GitHubRepository
}

export const RepoCard = (props: RepoCardProps) => {
    const repo = props.repo;

    return (
        <article>
            <Link to={`/${repo.id}`}>
            <div className="repo_card">
                <h2>{repo.url}</h2>
            </div>
            </Link>
        </article>
    )
}