import { useState, useEffect } from "react";

export default function useHttpData<T>(url: string) {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        async function hook() {
            setLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error(`${response.status}`);
                const data: T[] = await response.json();
                setData(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        hook();
    }, []);

    return { data, loading };
}
