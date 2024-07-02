import { Outlet } from "react-router-dom";
import LayoutProvider from "./components/SiteLayout";

function Layout() {
    return (
        <LayoutProvider>
            <Outlet />
        </LayoutProvider>
    );
}

export default Layout;
