import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorDetail() {
    const error = useRouteError();
    return (
        <div>
            {isRouteErrorResponse(error)
                ? "La pagina no existe"
                : `Ha ocurrido un error ${(error as Error).message}`}
        </div>
    );
}
