import { useState } from "react";
import { getAllRepos, getRepositoryByID } from "./http/repositories.http";
import { Repositories, GitHubRepository } from "@shared/repository.types";


const useRepos = () => {
    const [allRepos, setRepos] = useState<Repositories>([]);
    const [currRepo, setCurrRepo] = useState<GitHubRepository>(
        {
            id: "",
            isPrivate: true,
            languages: [
                {size: 0,
                node:{name: "rust"}}
            ],
            url: "asas"
        }
    );

    const getRepositories = () => {
        getAllRepos()
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

    return {allRepos, getRepositories, currRepo, getOneRepository};
}

export default useRepos;