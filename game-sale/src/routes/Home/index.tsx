import { Box, Button, Center, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const [loaded, isLoaded] = useState(false);

    useEffect(() => {
        isLoaded(true);
    }, []);

    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            bottom={0}
            backgroundImage='url("https://mdbcdn.b-cdn.net/img/new/slides/041.webp")'
            backgroundSize="cover"
            backgroundPosition="center"
        >
            <Box
                bgColor="rgba(0, 0, 0, 0.6)"
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                opacity={loaded ? 1 : 0}
                transition="opacity 1s ease"
            >
                <Center h="100vh">
                    <VStack>
                        <Heading
                            color="white"
                            fontSize={45}
                            mb={-5}
                            fontFamily="sans-serif"
                            className={`${styles.fadeIn} ${
                                loaded ? styles.loaded : ""
                            }`}
                        >
                            Bienvenidos a
                        </Heading>
                        <Heading
                            color="green.300"
                            fontSize={45}
                            fontFamily="sans-serif"
                            className={`${styles.fadeIn} ${
                                loaded ? styles.loaded : ""
                            }`}
                        >
                            Game Sale
                        </Heading>
                        <Text color="gray" m={5}>
                            Una web para encontrar ofertas, además contamos
                            chistes:
                        </Text>

                        <Button
                            color="white"
                            bgColor="green.300"
                            borderRadius={50}
                            pl={5}
                            pr={5}
                            m={5}
                            fontSize={14}
                            boxShadow="0 4px 0 #2F855A"
                            transition="transform 0.2s ease, box-shadow 0.2s ease"
                            _hover={{
                                transform: "translateY(4px)",
                                boxShadow: "0 0 0 #1C4532",
                            }}
                            onClick={() => navigate("games")}
                        >
                            Empieza ahora
                        </Button>
                    </VStack>
                </Center>
            </Box>
        </Box>
    );
}
