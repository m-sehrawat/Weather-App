import { Box, Button, Center, Flex, Input } from "@chakra-ui/react";

export const Navbar = () => {

    return (
        <Flex h={'70px'} bg={'#d7defa'} justifyContent={'center'}>
            <Center px={'10px'}>
                <Input borderRadius={'15px 0px 0px 15px'} bg={'white'} _focus={{ 'border': 'none' }} />
                <Button borderRadius={'0px 15px 15px 0px'} color={'white'} bg={'#5e82f4'} _hover={{ 'bg': '5e82f4' }}>Search</Button>
            </Center>
        </Flex>
    );
};