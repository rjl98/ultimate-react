import { Navigate, Outlet } from "react-router-dom";

const useUser = () => undefined;
export default function AuthorizedUsers() {
    const user = useUser();
    if (!user) {
        return <Navigate to="/" />;
    }
    return <Outlet />;
}
