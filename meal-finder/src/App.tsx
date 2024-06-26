import { Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import MainContent from "./components/MainContent";
import { useState } from "react";
import { Category, Meal, MealDetails, SearchForm } from "./types/types";
import useHttpData from "./hooks/useHttpData";
import axios from "axios";
import RecipeModal from "./components/RecipeModal";
import useFetch from "./hooks/useFetch";

const baseUrl = "https://www.themealdb.com/api/json/v1/1/";

const url = `${baseUrl}list.php?c=list`;

const makeMealUrl = (category: Category) =>
    `${baseUrl}filter.php?c=${category.strCategory}`;
const defaultCategory = { strCategory: "Beef" };

function App() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [selectedCategory, setSelectedCategory] =
        useState<Category>(defaultCategory);

    const { loading, data } = useHttpData<Category>(url);

    const {
        loading: loadingMeal,
        data: dataMeal,
        setData: setMeals,
        setLoading: SetLoadingMeal,
    } = useHttpData<Meal>(makeMealUrl(defaultCategory));

    const searchAPI = (searchForm: SearchForm) => {
        const url = `${baseUrl}search.php?s=${searchForm.search}`;
        SetLoadingMeal(true);
        axios
            .get<{ meals: Meal[] }>(url)
            .then(({ data }) => setMeals(data.meals))
            .finally(() => SetLoadingMeal(false));
    };

    const {
        fetch,
        loading: loadingMealDetails,
        data: mealDetailData,
    } = useFetch<MealDetails>();

    const searchMealDetails = (meal: Meal) => {
        onOpen();
        fetch(`${baseUrl}lookup.php?i=${meal.idMeal}`);
    };

    return (
        <>
            <Grid
                templateAreas={`"header header"
                    "nav main"`}
                gridTemplateRows={"60px 1fr"}
                gridTemplateColumns={{ sm: `0 1fr`, md: `250px 1fr` }}
                fontSize={14}
            >
                <GridItem
                    pos="sticky"
                    top={0}
                    zIndex={1}
                    pt={7}
                    bg="white"
                    boxShadow="lg"
                    area={"header"}
                >
                    <Header onSubmit={searchAPI} />
                </GridItem>
                <GridItem
                    pos="sticky"
                    top="60px"
                    left={0}
                    p={5}
                    area={"nav"}
                    height="calc(100vh - 60px)"
                    overflowY="auto"
                >
                    <SideNav
                        categories={data}
                        loading={loading}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                </GridItem>
                <GridItem p={4} bg="gray.100" area={"main"}>
                    <MainContent
                        openRecipe={searchMealDetails}
                        loading={loadingMeal}
                        meals={dataMeal}
                    />
                </GridItem>
            </Grid>
            <RecipeModal
                data={mealDetailData}
                loading={loadingMealDetails}
                isOpen={isOpen}
                onClose={onClose}
            />
        </>
    );
}

export default App;
