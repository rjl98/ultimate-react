import {
    Box,
    Center,
    Skeleton,
    SkeletonText,
    Stack,
    useColorModeValue,
} from "@chakra-ui/react";

export default function CardSkeleton() {
    return (
        <Center py={6} px={5}>
            <Box
                maxW="445px"
                w="full"
                bg={useColorModeValue("white", "gray.900")}
                boxShadow="2xl"
                rounded="md"
                p={6}
                overflow="hidden"
            >
                <Box
                    h="210px"
                    bg="gray.100"
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos="relative"
                >
                    <Skeleton h="33vh" />
                </Box>
                <Stack>
                    <SkeletonText
                        noOfLines={5}
                        spacing={6}
                        skeletonHeight={2}
                    ></SkeletonText>
                </Stack>
            </Box>
        </Center>
    );
}
