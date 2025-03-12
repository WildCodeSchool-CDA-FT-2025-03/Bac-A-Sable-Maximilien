import { GitHubRepository } from "@shared/repository.types";
import { Link } from "react-router-dom";
import "./RepoCard.css"
import { BiLogoGithub, BiSolidUser } from "react-icons/bi";

type RepoCardProps = {
    repo: GitHubRepository
}

export const RepoCard = (props: RepoCardProps) => {
    const repo = props.repo;

    return (
        <article>

            <div className="repo_card main_layout">
                <div className="icon_link">
                    <BiSolidUser/>
                    <p>{repo.owner.login}</p>
                </div>

                <Link to={`/${repo.id}`}>
                    <p className="main_title">{repo.name}</p>
                </Link>

                <div className="icon_link">
                    <BiLogoGithub/>
                    <a href={repo.url}>{repo.url}</a>
                </div>

            </div>

        </article>
    )
}