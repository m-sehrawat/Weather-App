import { Box, Text } from "@chakra-ui/react";

export const ForcastBox = ({ children }) => {
    return (
        <Box className="zoom" textAlign={'center'} overflow={'hidden'} borderRadius={'30px'} shadow={'0px 0px 30px 6px #E2E2E2'} h={'200px'}>
            {children}
        </Box>
    );
};

export const Newbox = ({ children }) => {
    return (
        <Box className="zoom" overflow={'hidden'} shadow={'0px 0px 30px 6px #E2E2E2'} borderRadius={'30px'} h={'300px'}>
            {children}
        </Box>
    );
};

export const NewText = ({ children }) => {
    return (
        <Text color={'white'} fontWeight={500} mt={'15px'} fontSize={'18px'}>
            {children}
        </Text>
    );
};