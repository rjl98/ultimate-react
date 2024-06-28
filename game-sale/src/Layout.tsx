import { Outlet } from "react-router-dom";
import LayoutProvider from "./providers/LayoutProvider";

function Layout() {
    return (
        <LayoutProvider>
            <Outlet />
        </LayoutProvider>
    );
}

export default Layout;
