import { useEffect, useState } from "react";

import { getAllRepos } from "./http/repositories.http";
import { Repositories } from "@shared/repository.types";

export default {
    GetAll: () => {
        const [data, setData] = useState<Repositories>([]);

        useEffect(() => {
            getAllRepos().then(repos =>
                {
                    setData(repos)
                });
        }, []);

        return { data };
    }
};