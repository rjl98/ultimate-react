import { Link, VStack, Text, SkeletonText } from "@chakra-ui/react";
import useHttpData from "../hooks/useHttpData";
import useMain from "../hooks/useMain";

const Categories = () => {
    const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
    const rootObject = "meals";
    const { loading, data: Data } = useHttpData({ url, rootObject });
    const { setSelection } = useMain();

    if (loading) {
        return (
            <SkeletonText mt="4" noOfLines={6} spacing="6" skeletonHeight="3" />
        );
    }

    return (
        <VStack align="stretch">
            {Data?.map((d) => (
                <Link
                    key={d.strCategory}
                    borderRadius={5}
                    mb={-2}
                    maxWidth="100%"
                    onClick={() => setSelection(d.strCategory)}
                    _hover={{
                        background: "blue.400",
                        color: "white",
                    }}
                >
                    <Text p={1}>{d.strCategory}</Text>
                </Link>
            ))}
        </VStack>
    );
};

export default Categories;
