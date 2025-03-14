import { GitHubRepository } from "@shared/repository.types";
import { Link } from "react-router-dom";
import { BiLogoGithub, BiSolidUser } from "react-icons/bi";
import IconLanguage from '@/components/Language/IconLanguage'

import "./RepoCard.css"


type RepoCardProps = {
    repo: GitHubRepository
}

export const RepoCard = (props: RepoCardProps) => {
    const repo = props.repo;

    return (
        <article>

            <div className="repo_card main_layout">
                <div className="repo_card-top-bar">
                    <div className="icon_link">
                        <BiSolidUser/>
                        <p>{repo.owner.login}</p>
                    </div>
                    <div>
                        {repo.languages.map(l => <IconLanguage key={l.node.name} lang={l.node.name.toLowerCase()} selected={false}/>)}
                    </div>
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