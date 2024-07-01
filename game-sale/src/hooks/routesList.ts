export default function routesList() {
    const routes = [
        {
            path: "/",
            name: "Inicio",
            elementName: "Home",
        },
        {
            path: "games",
            name: "Juegos",
            elementName: "Games",
        },
    ];
    return { routes };
}
