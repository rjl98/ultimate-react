import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Layout from "../Layout";
// import ErrorPage from "./ErrorPage";
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
