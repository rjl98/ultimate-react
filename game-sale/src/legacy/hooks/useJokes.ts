import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Joke } from "../types";

const queryJokes = (id: number): Promise<Joke[]> => {
    const url = "https://api.chucknorris.io/jokes/random";

    return axios.get(url, { params: { id } }).then((response) => response.data);
};

export default function useJokes(id: number) {
    return useQuery({
        queryKey: ["jokes"],
        queryFn: () => queryJokes(id),
    });
}
