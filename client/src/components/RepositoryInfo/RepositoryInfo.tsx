import { GitHubRepository } from "@shared/repository.types";
// import "./RepoCard.css"

type RepoCardProps = {
    repo: GitHubRepository
}

const RepositoryInfo = (props: RepoCardProps) => {
    const repo = props.repo;

    return (
        <div className="repo_card">
            <h2>info: {repo.url}</h2>
        </div>
    )
}

export default RepositoryInfo;