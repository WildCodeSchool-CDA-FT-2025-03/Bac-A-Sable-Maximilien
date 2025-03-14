import { useState } from "react";
import { getAllRepos, getRepositoryByID, addRepository } from "./http/repositories.http";
import { GitHubRepository, ConstructGitHubRepository } from "@shared/repository.types";
import { ResponseRepositoryMetadata} from "@shared/requests.types";

import { Paging } from "@shared/repository.types";

const useRepos = () => {
    const [allRepos, setRepos] = useState<ResponseRepositoryMetadata>({repositories: [], languages: [], total: 0});
    const [currRepo, setCurrRepo] = useState<GitHubRepository|null>(null);


    const getRepositories = (paging: Paging = {count: 0, page: 0}, filter: string[] = []) => {
        getAllRepos(paging, filter)
        .then(repos => {
            setRepos(repos.data)
        })
        .catch(err => {
            console.log(err);
        });
    }

    const getOneRepository = (id: string) => {
        getRepositoryByID(id)
        .then(repos => {
            if(repos.data.length > 0) {
                setCurrRepo(repos.data[0])
            }
        })
        .catch(err => {
            console.log(err);
        });
    }

    const addNewRepository = async (repo: ConstructGitHubRepository) => {
        await addRepository(repo);
    };

    return {
        allRepos, getRepositories,
        currRepo, getOneRepository,
        addNewRepository
    };
}

export default useRepos;