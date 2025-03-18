import { ResponseRepositoryMetadata } from "@shared/requests.types";
import { useState } from "react";
import { getAllRepos } from "./http/github.https";
import { Paging } from "@shared/repository.types";

type UsersRepos = Record<string, ResponseRepositoryMetadata>

const useGithub = () => {
    const [usersRepos, setUsersRepos] = useState<UsersRepos>({});

    const getRepositories = (name: string, paging: Paging = {count: 0, page: 0}, filter: string[] = []) => {
        getAllRepos(name, paging, filter)
            .then(repos => {
                usersRepos[name] = repos.data;
                setUsersRepos(usersRepos);
            })
            .catch(err => {
                console.log(err);
            });
    }

    const getAllRepositories = (names: string[], paging: Paging = {count: 0, page: 0}, filter: string[] = []) => {
        names.forEach(n => getRepositories(n, paging, filter));
    }

    return {
        usersRepos, getRepositories,
        getAllRepositories,
    }

}

export default useGithub;