// import { useQuery } from "@tanstack/react-query";
// import { Todo } from "../types";
// import axios from "axios";

// const queryTodos = (userId: number | undefined): Promise<Todo[]> => {
//     const url = "https://jsonplaceholder.typicode.com/todos?";

//     return axios
//         .get(url, { params: { userId } })
//         .then((response) => response.data);
// };

// export default function useTodos(userId: number | undefined) {
//     return useQuery({
//         // users / 2 / todos
//         queryKey: userId ? ["users", userId, "todos"] : ["todos"],
//         queryFn: () => queryTodos(userId),
//     });
// }

// import { useQuery, keepPreviousData } from "@tanstack/react-query";
// import { Todo, TodoQuery } from "../types";
// import axios from "axios";

// const queryTodos = (query: TodoQuery): Promise<Todo[]> => {
//     const url = "https://jsonplaceholder.typicode.com/todos?";

//     return axios
//         .get(url, {
//             params: {
//                 _start: (query.page - 1) * query.pageSize,
//                 _limit: query.pageSize,
//             },
//         })
//         .then((response) => response.data);
// };

// export default function useTodos(query: TodoQuery) {
//     return useQuery({
//         queryKey: ["todos", query],
//         queryFn: () => queryTodos(query),
//         placeholderData: keepPreviousData,
//     });
// }

import { useInfiniteQuery } from "@tanstack/react-query";
import { Todo } from "../types";
import axios from "axios";

const queryTodos = (pageParam: number, pageSize: number): Promise<Todo[]> => {
    const url = "https://jsonplaceholder.typicode.com/todos?";

    return axios
        .get(url, {
            params: {
                _start: (pageParam - 1) * pageSize,
                _limit: pageSize,
            },
        })
        .then((response) => response.data);
};

export default function useTodos(pageSize: number) {
    return useInfiniteQuery({
        queryKey: ["todos"],
        queryFn: ({ pageParam }) => queryTodos(pageParam, pageSize),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length > 0 ? allPages.length + 1 : undefined;
        },
    });
}
