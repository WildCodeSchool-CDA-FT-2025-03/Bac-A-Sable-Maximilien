import { ResponseRepositoryMetadata } from "@shared/requests.types";
import { useState } from "react";
import { getAllRepos } from "./http/github.https";
import { Paging, Repositories } from "@shared/repository.types";

type UsersRepos = Record<string, ResponseRepositoryMetadata>

const useGithub = () => {
    const [usersRepos, setUsersRepos] = useState<UsersRepos>({});
    const [repositories, setRepositories] = useState<Repositories>([]);

    const getRepositories = (name: string, paging: Paging = {count: 0, page: 0}, filter: string[] = []) => {
        return getAllRepos(name, paging, filter);
            // .then(repos => {
            //     usersRepos[name] = repos.data;
            //     setUsersRepos(usersRepos);
            // })
            // .catch(err => {
            //     console.log(err);
            // });
    }

    // const getAllRepositories = async (names: string[], paging: Paging = {count: 0, page: 0}, filter: string[] = []) => {
    //     // getAllMetaData.
    // }

    const getAllMetaData = (names: string[], paging: Paging = {count: 0, page: 0}, filter: string[] = []) => {
        const wainting = [];

        for(const n of names) {
            wainting.push(getAllRepos(n, paging, filter));
        }
        // names.forEach(n => wainting.push(getAllRepos(n, paging, filter)));

        Promise.all(wainting).then(datas => {

            let repos = [] as Repositories;
            for(const d of datas) {
                repos = repos.concat(d.data.repositories);
                /*
                console.log(datas);
                const metadata = d.data;
                console.log(metadata);
                const rrr = Object.entries(metadata).reduce((acc, [_, b]) => {
                    return acc.concat(b.repositories);
                }, [] as Repositories);
                console.log(rrr);*/
            }

            setRepositories(repos);
        }).catch(err => {
            console.log(err)
            setRepositories([]);
        });

    }

    return {
        usersRepos, getRepositories,
        repositories, setUsersRepos,
        getAllMetaData,
    }

}

export default useGithub;