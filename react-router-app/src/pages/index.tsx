import { createBrowserRouter } from "react-router-dom";
import ErrorDetail from "./ErrorDetail";
import Home from "./Home";
import Layout from "./Layout";
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import AuthorizedUsers from "./AuthorizedUsers";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorDetail />,
        children: [{ index: true, element: <Home /> }],
    },
    {
        path: "/products",
        element: <AuthorizedUsers />,
        children: [
            { path: "", element: <Product /> },
            { path: ":id", element: <ProductDetail /> },
        ],
    },
]);

export default router;
