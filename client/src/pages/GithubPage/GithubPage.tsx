import { useEffect } from "react";
import BarSearchRepo from "@/components/BarSearchRepo/BarSearchRepo";
import { ToolsBar } from "@/components/ToolsBar/ToolsBar";
import { RepositoriesList } from "@/components/RepositoriesList/RepositoriesList";
import useGithub from "@/services/github.service";
import useUser from "@/contexts/userContext";
import { Repositories } from "@shared/repository.types";

import "./GithubPage.css"

const GithubPage = () => {
    const {usersRepos, getAllRepositories} = useGithub();
    const {paging, languagesFilter, githubUser} = useUser();

    useEffect(() => {
        getAllRepositories(githubUser, paging, languagesFilter);
      }, [paging, languagesFilter, githubUser]);

    const repositories = Object.entries(usersRepos).reduce((acc, [_, b]) => {
        return acc.concat(b.repositories);
    }, [] as Repositories);

    return (
        <div className="github-page">
            <BarSearchRepo/>
            <ToolsBar githubUsers={githubUser}/>
            <RepositoriesList repos={repositories}/>
        </div>
    )
}
export default GithubPage;