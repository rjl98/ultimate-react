import {
    Box,
    Center,
    Heading,
    Image,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import useGames from "../../hooks/useGames";

export default function Games() {
    const { data } = useGames(0);

    if (!data) {
        return null;
    }

    return (
        <SimpleGrid columns={3} spacing={5}>
            {data.map((game) => (
                <Center key={game.gameID} py={6} px={5}>
                    <Box
                        maxW={"445px"}
                        w={"full"}
                        bg={useColorModeValue("white", "gray.900")}
                        boxShadow={"2xl"}
                        rounded={"md"}
                        p={6}
                        overflow={"hidden"}
                    >
                        <Box
                            h={"210px"}
                            bg={"gray.100"}
                            mt={-6}
                            mx={-6}
                            mb={6}
                            pos={"relative"}
                        >
                            <Image
                                w="100vw"
                                h="34vh"
                                src={game.thumb}
                                alt="Example"
                            />
                        </Box>
                        <Stack>
                            <Text
                                color={"green.600"}
                                textTransform={"uppercase"}
                                fontWeight={700}
                                fontSize={"sm"}
                                letterSpacing={1.5}
                                mb={0}
                            >
                                Oferta
                            </Text>
                            <Heading
                                color={useColorModeValue("gray.700", "white")}
                                fontSize={"2xl"}
                                fontFamily={"body"}
                            >
                                {game.title}
                            </Heading>
                            <Text color={"gray.500"}>
                                Critica: {game.steamRatingText}
                            </Text>
                        </Stack>
                        <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                            <Text fontWeight={600} mb={0}>
                                Puntaje: {game.steamRatingPercent}%
                            </Text>
                            <Text color={"gray.500"} mb={0}>
                                Antes: ${game.normalPrice} · Ahora: $
                                {game.salePrice}
                            </Text>
                        </Stack>
                    </Box>
                </Center>
            ))}
        </SimpleGrid>
    );
}

{
    /* ; */
}
