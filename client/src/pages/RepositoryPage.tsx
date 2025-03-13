import useRepos from "@/services/repositories.service";
import RepositoryInfo from "@/components/RepositoryInfo/RepositoryInfo";
import { useEffect } from "react";
import { useParams } from "react-router-dom";



const RepositoryPage = () => {
    const { id } = useParams();
    const {currRepo, getOneRepository} = useRepos();

    useEffect(() => {
        getOneRepository(id as string);
    }, []);

    const GetRepo = () => {
        if(currRepo !== null) {
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

export default RepositoryPage;