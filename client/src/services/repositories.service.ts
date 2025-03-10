import { useEffect, useState } from "react";
import client from "./client";

export default {
    getAll: () => {
        const [data, setData] = useState<any[]>([]);

        const getAllRepos = () => {
            client
              .get("/repos")
              .then((repos) => {
                setData(repos.data as any[]);
              })
              .catch((error) => {
                console.error(error);
              });
          };

          useEffect(() => {
            getAllRepos();
          }, []);

          return { data };
    }
};