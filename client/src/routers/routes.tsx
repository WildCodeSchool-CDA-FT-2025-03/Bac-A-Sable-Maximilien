import { createBrowserRouter } from "react-router";
import App from "../App.tsx";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element:<Home/>
                // loader: async () => {
                //     const repos = repositoriesService.GetAll();
                //     return repos;
                // }
            }
        ],
    }
]);

export default router;