import client from "@/services/client";
import { Paging } from "@shared/repository.types";

//refactoring
const toParams = (filter: string[]) => {
    return "filterLanguages=" +filter.map(l => `${l}`).join(",");
}

export const getAllRepos = (name: string, paging: Paging, filter: string[] = []) => {
    let params = "";

    if(filter.length > 0) {
        params = toParams(filter);
    }
    return client.get(`/api/github/${name}?limit=${paging.count}&page=${paging.page}&${params}`);
};