import { Box, Skeleton } from "@chakra-ui/react";

function SkeletonCard() {
    return (
        <Box w="350px" h="470px" padding="6" bg="white" borderRadius={5}>
            <Skeleton w="310px" h="310px" ml={-1} mb={4} />
            <Skeleton w="310px" h="30px" ml={-1} mb={7} />
            <Skeleton w="120px" h="40px" ml={-1} />
        </Box>
    );
}

export default SkeletonCard;
