import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <NavLink
                className={({ isActive }) => (isActive ? "enabled" : "")}
                to="/"
            >
                Inicio
            </NavLink>{" "}
            <NavLink to="/products">Productos</NavLink>
            <Outlet />
        </div>
    );
}
