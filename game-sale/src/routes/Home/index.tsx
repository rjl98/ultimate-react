import useData from "../../hooks/useData";
import HomeProvider from "../../components/Hero";
import { Joke } from "../../types";

export default function Home() {
    const url = "https://api.chucknorris.io/jokes/random";

    const { data, isLoading } = useData(url);

    if (isLoading) {
        return null;
    }

    const joke = data as Joke;

    return <HomeProvider>{joke.value}</HomeProvider>;
}
