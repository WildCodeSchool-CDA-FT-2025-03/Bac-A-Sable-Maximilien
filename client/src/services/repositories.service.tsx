import { useState } from "react";
import { getAllRepos, getRepositoryByID } from "./http/repositories.http";
import { Repositories, GitHubRepository, GitHubRepositoryLanguage } from "@shared/repository.types";


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
            setCurrRepo(repos.data)
        })
        .catch(err => {
            console.log(err);
        });
    }

    return {allRepos, getRepositories, currRepo, getOneRepository};
}
    /*
    const getRepos: () => {

        const [allRepos, setRepos] = useState<Repositories>([]);

        getAllRepos().then(repos => {
                setRepos(repos.data)
            });

        return allRepos;
    };

    const getOneRepo: (id: string) => {

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

        getRepositoryByID(id).then(repo => {
            setCurrRepo(repo.data);
        })
        .catch(raa => {
            console.error("err")
            console.log(raa)
        });

        return currRepo;
    };*/
//}

export default useRepos;