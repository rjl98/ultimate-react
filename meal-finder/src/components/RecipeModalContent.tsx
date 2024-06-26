import {
    ModalBody,
    ModalCloseButton,
    ModalHeader,
    Image,
    Heading,
    Text,
    OrderedList,
    ListItem,
} from "@chakra-ui/react";
import { MealDetails } from "../types/types";

type Props = {
    data: MealDetails;
};

const joinIngredients = (data: MealDetails) => {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = data[`strIngredient${i}`];
        const measure = data[`strMeasure${i}`];
        if (ingredient !== "" && ingredient !== null) {
            ingredients.push(`${ingredient} - ${measure}`);
        }
    }
    return ingredients;
};

function RecipeModalContent({ data }: Props) {
    const ingredients = joinIngredients(data);
    console.log(ingredients);
    return (
        <>
            <ModalHeader>{data.strMeal}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Image
                    alt={data.strMeal}
                    w="100%"
                    borderRadius="lg"
                    src={data.strMealThumb}
                />
                <Heading mt="4" mb="4" size="md">
                    Ingredientes
                </Heading>
                <OrderedList>
                    {ingredients.map((ingredient) => (
                        <ListItem key={ingredient}>{ingredient}</ListItem>
                    ))}
                </OrderedList>
                <Text whiteSpace="pre-line" mt="4">
                    {data.strInstructions}
                </Text>
            </ModalBody>
        </>
    );
}

export default RecipeModalContent;
