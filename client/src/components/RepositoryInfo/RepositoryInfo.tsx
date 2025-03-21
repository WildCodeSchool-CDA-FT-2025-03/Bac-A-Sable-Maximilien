import { JSX } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { GitHubRepository } from "@shared/repository.types";
import IconLanguage from "../Language/IconLanguage";
import { FaEquals } from "react-icons/fa";
import "./RepositoryInfo.css"

type RepoCardProps = {
    repo: GitHubRepository
}

const RepositoryInfo = (props: RepoCardProps) => {
    const repo = props.repo;

    const total = repo.languages.reduce((acc, l) => {
        return acc + l.size;
    }, 0);

    const date = new Date(repo.createdAt);
    const local = Intl.DateTimeFormat().resolvedOptions().locale;
    const formatter = new Intl.DateTimeFormat(local, { day: '2-digit', month: '2-digit', year: 'numeric' });
    const date_format = formatter.format(date);

    const langs = repo.languages
        .sort((a, b) => b.size - a.size)
        .reduce((acc, l) => {
            const name = l.node.name;
            return acc.concat(
                <IconLanguage key={"a"+name} lang={name} selected={true}/>,
                <div key={"b"+name}>{name}</div>,
                <div key={"c"+name} className="repo_card-lage-size">{(l.size/1024).toPrecision(3)} Ko</div>,
                <div key={"d"+name} className="repo_card-lage-size">{(l.size / total*100).toPrecision(3)} %</div>
            );
        }, [] as JSX.Element[]);

    return (
        <div className="repo_card">
            <div className="repo_card-topbar">
                <div className="repo_card-topbar-item">
                    {repo.isPrivate ? <LuEyeClosed size="1.5rem"/> : <LuEye size="1.5rem"/>}
                    {repo.isPrivate ? "Private" : "Public"}
                </div>
                <div>
                    {date_format}
                </div>
            </div>
            <p className="repo_card-title">{repo.name}</p>
            <div className="repo_card-info">
                <FaGithub size="2rem"/>
                <Link to={repo.url}>
                    <p>{repo.url}</p>
                </Link>
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
                        <FaEquals/>
                        <div/>
                        <div className="repo_card-lage-size ">{(total/1024).toPrecision(3)} Ko</div>
                        <div/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RepositoryInfo;