import useRepos from "@/services/repositories.service";
import RepositoryInfo from "@/components/RepositoryInfo/RepositoryInfo";
import { useEffect } from "react";
import { /*Navigate,*/ useParams } from "react-router-dom";



const RepositoryPage = () => {
    const { id } = useParams();
    const {currRepo, getOneRepository} = useRepos();

    useEffect(() => {
        getOneRepository(id as string);
    }, []);

    return (
        <RepositoryInfo repo={currRepo}/>
    )
}

export default RepositoryPage;