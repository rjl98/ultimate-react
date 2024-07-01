import { Box, Container, HStack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import routesList from "../hooks/routesList";

export default function Header() {
    const { routes } = routesList();
    return (
        <Container m={0} p={0} overflow="hidden">
            <HStack spacing="20px" p={3}>
                <Box>
                    <Text>Game Sale</Text>
                </Box>
                {routes.map((r) => (
                    <NavLink key={r.path} to={r.path}>
                        <Box
                            mt="-15px"
                            p={1}
                            borderRadius={5}
                            _hover={{ bgColor: "gray.100" }}
                        >
                            {r.name}
                        </Box>
                    </NavLink>
                ))}
            </HStack>
        </Container>
    );
}
