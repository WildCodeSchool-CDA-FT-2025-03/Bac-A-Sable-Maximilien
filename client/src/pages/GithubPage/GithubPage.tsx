import { useEffect } from "react";
import BarSearchRepo from "@/components/BarSearchRepo/BarSearchRepo";
import { ToolsBar } from "@/components/ToolsBar/ToolsBar";
import useGithub from "@/services/github.service";
import useUser from "@/contexts/userContext";

import "./GithubPage.css"

const GithubPage = () => {
    const {usersRepos, getAllRepositories} = useGithub();
    const {paging, languagesFilter, githubUser} = useUser();

    useEffect(() => {
        getAllRepositories(githubUser, paging, languagesFilter);
      }, [paging, languagesFilter, githubUser]);

    console.log(usersRepos);
    return (
        <div className="github-page">
            <BarSearchRepo/>
            <ToolsBar/>
        </div>
    )
}
export default GithubPage;