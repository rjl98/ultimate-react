import { useEffect, useState } from "react";
import axios from "axios";

type Props = {
    url: string;
    rootObject: string;
};

type dataType = {
    strCategory: string;
    strMeal: string;
    strMealThumb: string;
};

function useHttpData({ url, rootObject }: Props) {
    const [data, setData] = useState<dataType[]>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(url);
                setData(response.data[rootObject]);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url, rootObject]);

    return { data, loading };
}

export default useHttpData;
