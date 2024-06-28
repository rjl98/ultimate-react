import { Box, Container, HStack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Header() {
    const options = [
        {
            route: "/",
            name: "Inicio",
        },
        {
            route: "games",
            name: "Juegos",
        },
    ];
    return (
        <Container m={0} p={0} overflow="hidden">
            <HStack spacing="20px" p={3}>
                <Box>
                    <Text>Game Sale</Text>
                </Box>
                {options.map((o) => (
                    <NavLink key={o.route} to={o.route}>
                        <Box
                            mt="-15px"
                            p={1}
                            borderRadius={5}
                            _hover={{ bgColor: "gray.100" }}
                        >
                            {o.name}
                        </Box>
                    </NavLink>
                ))}
            </HStack>
        </Container>
    );
}
