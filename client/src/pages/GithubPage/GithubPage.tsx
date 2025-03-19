import { useQueries } from "@tanstack/react-query";
import { useEffect } from "react";
import BarSearchRepo from "@/components/BarSearchRepo/BarSearchRepo";
import { ToolsBar } from "@/components/ToolsBar/ToolsBar";
import { RepositoriesList } from "@/components/RepositoriesList/RepositoriesList";
import useGithub from "@/services/github.service";
import useUser from "@/contexts/userContext";
import SearchBar from "@/components/SearchBar/SearchBar";
import { Repositories } from "@shared/repository.types";
import { ResponseRepositoryMetadata } from "@shared/requests.types";

import "./GithubPage.css"

const GithubPage = () => {
    const { fetchUserRepos } = useGithub();
    const {languagesFilter, githubUser, hiddenUser} = useUser();

    const queries = useQueries({
        queries: githubUser.map(user => ({
            queryKey: ['users-repos', user],
            queryFn: () => fetchUserRepos(user),
            staleTime: 300000,
        })),
    });

    const reposUser = queries
            .map(q => q.data)
            .filter(d => d && !hiddenUser.includes(d.owner)) as ResponseRepositoryMetadata[];

    const allRepo = reposUser.reduce((acc, r) => {
        acc.push(...r.repositories);
        return acc;
    }, [] as Repositories)
        .filter(re => {
            const langs = re.languages.map(l => l.node.name.toLowerCase());
            for(const l of langs) {
                if(languagesFilter.includes(l)) {
                    return false;
                }
            }
            return true;
        });

    return (
        <div className="github-page">
            <BarSearchRepo/>
            <ToolsBar githubUsers={githubUser}/>
            <SearchBar datas={reposUser}/>
            <RepositoriesList repos={allRepo}/>
        </div>
    )
}
export default GithubPage;