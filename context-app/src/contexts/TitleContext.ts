import { createContext } from "react";

type TitleContextType = {
    titleName: string;
};

export default createContext<TitleContextType>({} as TitleContextType);
