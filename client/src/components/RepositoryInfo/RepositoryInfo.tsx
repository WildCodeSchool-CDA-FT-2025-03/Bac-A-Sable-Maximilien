import { FaGithub } from "react-icons/fa";
import { GitHubRepository } from "@shared/repository.types";
import IconLanguage from "../Language/IconLanguage";
import "./RepositoryInfo.css"
import { JSX } from "react";
type RepoCardProps = {
    repo: GitHubRepository
}

const RepositoryInfo = (props: RepoCardProps) => {
    const repo = props.repo;

    const total = repo.languages.reduce((acc, l) => {
        return acc + l.size;
    }, 0);

    const langs = repo.languages.reduce((acc, l) => {
        return acc.concat(
            <IconLanguage lang={l.node.name} selected={true}/>,
            <div>{l.node.name}</div>,
            <div>{(l.size/1024).toPrecision(3)}Ko</div>,
            <div>{(l.size / total*100).toPrecision(3)}%</div>
        );
    }, [] as JSX.Element[]);

    return (
        <div className="repo_card">
            <p className="repo_card-title">{repo.name}</p>
            <div className="repo_card-info">
                <FaGithub size="2rem"/>
                <p>{repo.url}</p>
            </div>
            <div className="repo_card-detail">
                <div>
                    Description
                    <hr/>
                    <p>{repo.description}</p>
                </div>
                <div>
                    Languages
                    <hr/>
                    <div className="repo_card-langs">
                        {langs.map(e => e)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RepositoryInfo;