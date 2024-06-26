import { Container, Heading } from "@chakra-ui/react";
import Categories from "./Categories";
function Sidebar() {
    return (
        <Container ml={-3} w="200px" h="500px" position="fixed">
            <Heading
                color="blue.400"
                fontSize={13}
                fontWeight="bold"
                mt={6}
                mb={3}
            >
                CATEGORIAS
            </Heading>
            <Categories />
        </Container>
    );
}

export default Sidebar;
