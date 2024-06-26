import { Container } from "@chakra-ui/react";
import { SkeletonText } from "@chakra-ui/skeleton";

function RecipeModalSkeleton() {
    return (
        <Container>
            <SkeletonText
                spacing="4"
                mt="4"
                mb="5"
                noOfLines={1}
                skeletonHeight={8}
            />
            <SkeletonText
                spacing="4"
                borderRadius={200}
                noOfLines={1}
                skeletonHeight={280}
            />
            <SkeletonText mt="4" noOfLines={5} spacing="4" />
        </Container>
    );
}

export default RecipeModalSkeleton;
