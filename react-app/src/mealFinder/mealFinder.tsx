import { Grid, GridItem } from "@chakra-ui/react";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

function MealFinder() {
    document.title = "Meal Finder";
    return (
        <Grid
            templateAreas={`"header header"
                  "nav main" "footer footer"`}
            gridTemplateRows={"50px 1fr 30px"}
            gridTemplateColumns={"200px 1fr"}
            h="200px"
            gap="0"
        >
            <GridItem
                pl="2"
                bg="white"
                area={"header"}
                zIndex={3}
                boxShadow="lg"
                position="fixed"
                width="100%"
                pb={2}
                pt={1}
            >
                <Topbar />
            </GridItem>
            <GridItem pl="3" bg="white" area={"nav"} zIndex={2}>
                <Sidebar />
            </GridItem>
            <GridItem pl="2" bg="gray.200" area={"main"}>
                <Content />
            </GridItem>
            <GridItem pl="2" bg="white" area={"footer"}></GridItem>
        </Grid>
    );
}

export default MealFinder;
