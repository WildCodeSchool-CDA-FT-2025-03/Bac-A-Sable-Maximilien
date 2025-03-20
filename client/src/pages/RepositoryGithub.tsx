import { useQueries } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import RepositoryInfo from "@/components/RepositoryInfo/RepositoryInfo";
import useGithub from "@/services/github.service";
import useUser from "@/contexts/userContext";
import { ResponseRepositoryMetadata } from "@shared/requests.types";
import { Repositories } from "@shared/repository.types";

const RepositoryGithub = () => {
    const { id } = useParams();
    const { fetchUserRepos } = useGithub();
    const {githubUser, hiddenUser} = useUser();

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

    const list = reposUser.reduce((acc, r) => {
        return acc.concat(...r.repositories);
    }, [] as Repositories);
    const currRepo = list.find(r => r.id === id);


    const GetRepo = () => {
        if(currRepo !== null && currRepo !== undefined) {
            return <RepositoryInfo repo={currRepo}/>
        }
        else {
            return <div></div>
        }
    }

    return (
        <GetRepo/>
    )
}

export default RepositoryGithub;