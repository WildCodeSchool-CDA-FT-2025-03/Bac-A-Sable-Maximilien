import { createBrowserRouter } from "react-router";
import App from "@/App.tsx";
import Home from "@/pages/Home";
import CreateRepoPage from "@/pages/CreateRepoPage";
import RepositoryPage from "@/pages/RepositoryPage";
import GithubPage from "@/pages/GithubPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element:<Home/>
            },
            {
                path: "/:id",
                element: <RepositoryPage />,
                // loader: async ({params}) => {
                //     const {currRepo, getOneRepository} = useRepos();
                //     getOneRepository(params.id || "0");
                //     return currRepo;
                // }
            },
            {
                path: "/create",
                element: <CreateRepoPage />
            },
            {
                path: "/github",
                element: <GithubPage />
            }
        ],
    },
]);

export default router;
