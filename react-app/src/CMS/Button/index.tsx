import { ReactNode } from "react";

type variant = "primary" | "secondary" | "warning";
type Props = {
    variant?: variant;
    children: ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function Button({ variant = "primary", children, onClick }: Props) {
    return (
        <button
            type={children === "Enviar" ? "submit" : "button"}
            onClick={onClick}
            className={`btn btn-${variant}`}
        >
            {children}
        </button>
    );
}

export default Button;
