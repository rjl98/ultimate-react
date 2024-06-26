// import { useState, useEffect } from "react";

// type User = {
//     id: string;
//     name: string;
// };

// export default function useUsers() {
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

//     return { users, loading, error };
// }

import { useState, useEffect } from "react";

type ID = {
    id?: string | number;
};

export default function useHttpData<T extends ID>(url: string) {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;
        async function hook() {
            setLoading(true);
            try {
                const response = await fetch(url, { signal });
                if (!response.ok) throw new Error(`${response.status}`);
                const data: T[] = await response.json();
                setData(data);
                setError(undefined);
            } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        }
        hook();

        return () => controller.abort();
    }, []);

    const addData = async (element: T) => {
        const initialData = [...data];
        setData([{ id: 0, ...element }, ...data]);
        try {
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(element),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                setData(initialData);
                throw new Error(`${response.status}`);
            }
            const savedData = await response.json();
            setData([savedData, ...initialData]);
        } catch (error) {
            setError((error as Error).message);
        }
    };

    const deleteData = async (id: string | number) => {
        const initialData = [...data];
        setData(data.filter((x) => x.id !== id));

        try {
            const response = await fetch(`${url}/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                setData(initialData);
                throw new Error(`${response.status}`);
            }
        } catch (error) {
            setError((error as Error).message);
        }
    };

    return { data, loading, error, addData, deleteData };
}
