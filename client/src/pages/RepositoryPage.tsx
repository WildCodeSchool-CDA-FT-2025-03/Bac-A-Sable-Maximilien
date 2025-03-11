import useRepos from "@/services/repositories.service";

import RepositoryInfo from "@/components/RepositoryInfo/RepositoryInfo";
import { useEffect } from "react";

const RepositoryPage = () => {
    const {currRepo, getOneRepository} = useRepos();

    useEffect(() => {
        getOneRepository("R_kgDOKA1w5w");
    }, []);

    return (
        <RepositoryInfo repo={currRepo}/>
    )
}

export default RepositoryPage;