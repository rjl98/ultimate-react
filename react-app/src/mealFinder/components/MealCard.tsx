import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Heading,
    Image,
    SimpleGrid,
} from "@chakra-ui/react";
import useHttpData from "../hooks/useHttpData";
import SkeletonCard from "./SkeletonCard";
import useMain from "../hooks/useMain";
import { useEffect } from "react";

function MealCard() {
    const { selection, setSelection } = useMain();
    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selection}`;
    const rootObject = "meals";
    const { loading, data: Data } = useHttpData({ url, rootObject });

    useEffect(() => {
        console.log(selection);
        setSelection(selection);
    });

    if (loading) {
        return (
            <SimpleGrid columns={3} spacing={6}>
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
            </SimpleGrid>
        );
    }

    return (
        <SimpleGrid columns={3} spacing={6}>
            {Data?.map((d) => (
                <Card key={d.strMeal} maxW="sm">
                    <CardBody>
                        <Image src={d.strMealThumb} borderRadius="lg" />
                        <Heading size="md" mt="4" color="blue.600">
                            {d.strMeal}
                        </Heading>
                    </CardBody>
                    <CardFooter>
                        <Button colorScheme="blue">Ver receta</Button>
                    </CardFooter>
                </Card>
            ))}
        </SimpleGrid>
    );
}

export default MealCard;
