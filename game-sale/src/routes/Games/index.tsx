import { SimpleGrid } from "@chakra-ui/react";
import CardSkeleton from "../../components/CardSkeleton";
import useData from "../../hooks/useData";
import GamesProvider from "../../components/GameCard";
import { Game } from "../../types";

export default function Games() {
    const url =
        "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15";
    const { data, isLoading } = useData(url);

    const skeletons = [1, 2, 3, 4, 5, 6];

    if (isLoading) {
        return (
            <SimpleGrid columns={3} spacing={5}>
                {skeletons.map((skeleton) => (
                    <CardSkeleton key={skeleton} />
                ))}
                ;
            </SimpleGrid>
        );
    }

    const games = data.filter((d: Game) => "gameID" in d) as Game[];

    return (
        <SimpleGrid columns={3} spacing={5}>
            {games.map((game) => (
                <GamesProvider key={game.gameID} game={game} />
            ))}
        </SimpleGrid>
    );
}
