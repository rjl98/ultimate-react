import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "./Home";
import Games from "./Games";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        // errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            { path: "/games", element: <Games /> },
        ],
    },
]);

export default router;
