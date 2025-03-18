import { useEffect } from "react";
import BarSearchRepo from "@/components/BarSearchRepo/BarSearchRepo";
import { ToolsBar } from "@/components/ToolsBar/ToolsBar";
import { RepositoriesList } from "@/components/RepositoriesList/RepositoriesList";
import useGithub from "@/services/github.service";
import useUser from "@/contexts/userContext";
import { Repositories } from "@shared/repository.types";

import "./GithubPage.css"

const GithubPage = () => {
    const {repositories, getAllMetaData} = useGithub();
    const {paging, languagesFilter, githubUser} = useUser();

    useEffect(() => {
        getAllMetaData(githubUser, paging, languagesFilter);
      }, [githubUser, paging, languagesFilter]);


    return (
        <div className="github-page">
            <BarSearchRepo/>
            <ToolsBar githubUsers={githubUser}/>
            <RepositoriesList repos={repositories}/>
        </div>
    )
}
export default GithubPage;