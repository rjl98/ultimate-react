import { Grid, GridItem } from "@chakra-ui/react";
import { ReactNode } from "react";
import Header from "../components/Header";

type Props = {
    children: ReactNode;
};
export default function LayoutProvider({ children }: Props) {
    return (
        <Grid
            templateAreas={`"header header"
                "main main"`}
            gridTemplateRows={"50px 1fr auto"}
            gridTemplateColumns={"150px 1fr"}
            minHeight="100vh"
            fontSize={14}
        >
            <GridItem
                pl="2"
                bg="white"
                boxShadow="lg"
                zIndex={2}
                area={"header"}
            >
                <Header />
            </GridItem>
            <GridItem pl="2" bg="gray.100" zIndex={1} area={"main"}>
                {children}
            </GridItem>
        </Grid>
    );
}
