// import { useState } from "react";
// import useTodos from "./hooks/useTodos";

// export default function App() {
//     const [userId, setUserId] = useState<number>();
//     const { data, error, isLoading } = useTodos(userId);

//     if (error) return <h2>{error.message} :(</h2>;
//     if (isLoading) return <h2>Cargando...</h2>;

//     return (
//         <>
//             <h2>Todos</h2>
//             <select
//                 value={userId}
//                 onChange={(e) => {
//                     e.target.value !== ""
//                         ? setUserId(Number(e.target.value))
//                         : setUserId(undefined);
//                 }}
//             >
//                 <option value="">Todos los usuarios</option>
//                 <option value="1">Usuario 1</option>
//                 <option value="2">Usuario 2</option>
//                 <option value="3">Usuario 3</option>
//             </select>
//             <ul>
//                 {data?.map((todo) => (
//                     <li key={todo.id}>{todo.title}</li>
//                 ))}
//             </ul>
//         </>
//     );
// }

// import { useState } from "react";
// import useTodos from "./hooks/useTodos";

// export default function App() {
//     const pageSize = 15;
//     const [page, setPage] = useState(1);
//     const { data, error, isLoading, isPlaceholderData } = useTodos({
//         page,
//         pageSize,
//     });

//     if (error) return <h2>{error.message} :(</h2>;
//     if (isLoading) return <h2>Cargando...</h2>;

//     return (
//         <>
//             <h2>Todos</h2>
//             <ul>
//                 {data?.map((todo) => (
//                     <li key={todo.id}>{todo.title}</li>
//                 ))}
//             </ul>
//             <button disabled={page == 1} onClick={() => setPage(page - 1)}>
//                 {"<<"}
//             </button>
//             <button onClick={() => setPage(page + 1)}>{">>"}</button>
//             {isPlaceholderData && <span>Cargando...</span>}
//         </>
//     );
// }

import useTodos from "./hooks/useTodos";

export default function App() {
    const pageSize = 15;
    const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
        useTodos(pageSize);

    if (error) return <h2>{error.message} :(</h2>;
    if (isLoading) return <h2>Cargando...</h2>;
    const todos = data?.pages.flat();

    return (
        <>
            <h2>Todos</h2>
            <ul>
                {todos?.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
            <button
                disabled={isFetchingNextPage}
                onClick={() => fetchNextPage()}
            >
                {isFetchingNextPage ? "Cargando..." : "Cargar mas..."}
            </button>
        </>
    );
}
