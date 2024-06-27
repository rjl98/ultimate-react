import { useQuery } from "@tanstack/react-query";
import { Todo } from "../types";

const queryTodos = (): Promise<Todo[]> =>
    fetch("https://jsonplaceholder.typicode.com/todos").then((response) => {
        if (!response.ok) throw new Error(`Error ${response.status}`);
        return response.json();
    });

export default function useTodos() {
    return useQuery({
        queryKey: ["todos"],
        queryFn: queryTodos,
    });
}
