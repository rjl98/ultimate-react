import { Button, Center, Stack, Text } from "@chakra-ui/react";
import LayoutProvider from "./providers/LayoutProvider";

export default function ErrorPage() {
    return (
        <LayoutProvider>
            <Center h="100vh">
                <Stack>
                    <Text fontWeight="bold">HA OCURRIDO UN ERROR :(</Text>
                    <Button
                        bgColor="yellow.400"
                        borderRadius={45}
                        onClick={() => history.back()}
                    >
                        Volver
                    </Button>
                </Stack>
            </Center>
        </LayoutProvider>
    );
}
