import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Game } from "../types";

const queryGames = (gameID: number | undefined): Promise<Game[]> => {
    const url =
        "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15";

    return axios
        .get(url, { params: { gameID } })
        .then((response) => response.data);
};

export default function useGames(gameID: number | undefined) {
    return useQuery({
        queryKey: ["games"],
        queryFn: () => queryGames(gameID),
    });
}
