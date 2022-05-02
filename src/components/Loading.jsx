import { Container, Image } from "@chakra-ui/react";

export const Loading = () => {

    return (
        <Container mt={['200px', '100px']} >
            <Image src='/images/loading.gif' />
        </Container>
    );
};