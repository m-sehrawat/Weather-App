import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import { Map } from "./Map";

const Newbox = ({ children }) => {
    return (
        <Box overflow={'hidden'} shadow={'0px 0px 30px 6px #E2E2E2'} borderRadius={'30px'} h={'300px'}>
            {children}
        </Box>
    )
}


export const Deatils = () => {

    return (
        <>
            <Box maxW={'1300px'} m={['30px auto']} p={'20px'} h={'560px'}>
                <Grid gridTemplateColumns={['100%', 'repeat(2, 1fr)', 'repeat(2, 1fr)', '30% 27.5% 38%']} gap={'30px'}>
                    <Newbox>
                        <Box color={'#5e82f4'} px={'20px'} py={'30px'} textAlign={'center'}>
                            <Heading>Delhi, India</Heading>
                            <Heading fontSize={'120px'}>16<sup>o</sup>C</Heading>
                            <Heading>Cloudy</Heading>
                        </Box>
                    </Newbox>
                    <Newbox>
                        <Grid templateColumns={'50% 50%'} h={'100%'} p={'8px'}>
                            <Box py={'10px'} pl={'15%'}>
                                {['Felt Temp.', 'Humidity', 'Wind', 'Visibility', 'Max Temp.', 'Min Temp.'].map((e) => (
                                    <Text color={'#5e82f4'} fontWeight={500} mt={'15px'} fontSize={'18px'} >{e}</Text>
                                ))}
                            </Box>
                            <Box borderRadius={'30px'} bg={'#5e82f4'} py={'10px'} pl={'15%'}>
                                {['20 C', 'Humidity', 'Wind', 'Visibility', 'Max Temp.', 'Min Temp.'].map((e) => (
                                    <Text color={'white'} fontWeight={500} mt={'15px'} fontSize={'18px'} >{e}</Text>
                                ))}
                            </Box>
                        </Grid>
                    </Newbox>
                    <Newbox>
                        <Map />
                    </Newbox>

                </Grid>
            </Box>
        </>
    );
};

