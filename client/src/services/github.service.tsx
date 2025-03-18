import { ResponseRepositoryMetadata } from "@shared/requests.types";
import { useState } from "react";
import { getAllRepos } from "./http/github.https";
import { Paging, Repositories } from "@shared/repository.types";

const useGithub = () => {
    const [usersRepos, setUsersRepos] = useState<ResponseRepositoryMetadata[]>([]);
    const [repositories, setRepositories] = useState<Repositories>([]);

    const getAllMetaData = (names: string[], paging: Paging = {count: 0, page: 0}, filter: string[] = []) => {
        const wainting = [];

        for(const n of names) {
            wainting.push(getAllRepos(n, paging, filter));
        }

        Promise.all(wainting).then(datas => {

            let repos = [] as Repositories;
            const meta = [] as ResponseRepositoryMetadata[];

            for(const d of datas) {
                const r = d.data.repositories;
                if(r.length > 0) {
                    repos = repos.concat(r);
                }
                meta.push(d.data);
            }
            setUsersRepos(meta);
            setRepositories(repos);

        }).catch(err => {
            console.log(err)
            setRepositories([]);
        });

    }

    return {
        usersRepos,
        repositories, setUsersRepos,
        getAllMetaData,
    }

}

export default useGithub;