import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchData = async (url: string) => {
    const response = await axios.get(url);
    return response.data;
};

export default function useData(url: string) {
    return useQuery({
        queryKey: [url],
        queryFn: () => fetchData(url),
    });
}
