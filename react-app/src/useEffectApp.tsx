// import { useEffect, useState } from "react";

// function App() {
//     const [token, setToken] = useState<string>();
//     useEffect(() => {
//         console.log("Buscando algo con el token...", token);
//     }, [token]);
//     console.log(token);
//     return (
//         <div>
//             <button onClick={() => setToken("otro valor")}>Enviar</button>Hola
//             Mundo
//         </div>
//     );
// }

// export default App;

// import { useEffect, useState } from "react";

// type User = {
//     id: string;
//     name: string;
// };
// function App() {
//     const [users, setUsers] = useState<User[]>([]);
//     useEffect(() => {
//         const url = "https://jsonplaceholder.typicode.com/users";
//         fetch(url)
//             .then((response) => {
//                 return response.json() as Promise<User[]>;
//             })
//             .then((data) => setUsers(data));
//     }, []);
//     return (
//         <ul>
//             {users.map((u) => (
//                 <li key={u.id}>{u.name}</li>
//             ))}
//         </ul>
//     );
// }

// export default App;

// import { useEffect, useState } from "react";

// type User = {
//     id: string;
//     name: string;
// };
// function App() {
//     const [users, setUsers] = useState<User[]>([]);
//     const [loading, setLoading] = useState<boolean>(false);
//     const [error, setError] = useState<string>();
//     useEffect(() => {
//         const url = "https://jsonplaceholder.typicode.com/users";
//         setLoading(true);
//         fetch(url)
//             .then((response) => {
//                 if (!response.ok) throw new Error(`${response.status}`);
//                 return response.json() as Promise<User[]>;
//             })
//             .then((data) => setUsers(data))
//             .catch((error: Error) => setError(error.message))
//             .finally(() => setLoading(false));
//     }, []);

//     if (loading) {
//         return <p>Cargando...</p>;
//     }

//     if (error && !loading) {
//         return <p>Ha ocurrido un error {error}</p>;
//     }

//     return (
//         <ul>
//             {users.map((u) => (
//                 <li key={u.id}>{u.name}</li>
//             ))}
//         </ul>
//     );
// }

// export default App;

import useHttpData from "./hooks/useHttpData";

type User = {
    id?: string;
    name: string;
};

function App() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const {
        loading,
        error,
        data: users,
        addData: addUser,
        deleteData: deleteUser,
    } = useHttpData<User>(url);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error && !loading) {
        return <p>Ha ocurrido un error {error}</p>;
    }

    return (
        <ul>
            <button onClick={() => addUser({ name: "Chanchito feliz" })}>
                Enviar
            </button>
            <button onClick={() => deleteUser(1)}>Eliminar</button>
            {users.map((u) => (
                <li key={u.id}>{u.name}</li>
            ))}
        </ul>
    );
}

export default App;
