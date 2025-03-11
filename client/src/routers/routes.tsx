import { createBrowserRouter } from "react-router";
import App from "@/App.tsx";
import Home from "@/pages/Home";
import RepositoryPage from "@/pages/RepositoryPage";

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
                element: <RepositoryPage/>,
            }
        ],
    },
]);

export default router;
