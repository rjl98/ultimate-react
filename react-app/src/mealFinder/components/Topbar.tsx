import { SearchIcon } from "@chakra-ui/icons";
import {
    Button,
    Container,
    FormControl,
    Input,
    InputGroup,
    InputLeftElement,
} from "@chakra-ui/react";

function Topbar() {
    return (
        <Container mt="1" maxW="600">
            <FormControl>
                <InputGroup size="md">
                    <InputLeftElement pointerEvents="none">
                        <SearchIcon color="gray.300" />
                    </InputLeftElement>
                    <Input
                        type="text"
                        placeholder="Buscar..."
                        bg="white"
                        marginRight={1}
                    />
                    <Button type="submit" color="white" bgColor="blue.400">
                        Buscar
                    </Button>
                </InputGroup>
            </FormControl>
        </Container>
    );
}

export default Topbar;
