import { Outlet } from "react-router-dom";
import LayoutProvider from "./providers/LayoutProvider";

function Layout() {
    document.title = "Game Sale";
    return (
        <LayoutProvider>
            <Outlet />
        </LayoutProvider>
    );
}

export default Layout;
