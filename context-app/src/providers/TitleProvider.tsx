import { ReactNode, useState } from "react";
import TitleContext from "../contexts/TitleContext";

type Props = {
    children: ReactNode;
};

export default function TitleProvider({ children }: Props) {
    const [title] = useState({ titleName: "-- Todos --" });

    return (
        <TitleContext.Provider value={title}>{children}</TitleContext.Provider>
    );
}
