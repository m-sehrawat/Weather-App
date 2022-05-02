import { Box, Grid, Heading, Text, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { celsius, myToast } from "../helpers/extraFunctions";
import { getItem } from "../helpers/localStorage";
import { getWeatherByLocation } from "../redux/actions";
import { Error } from "./Error";
import { Loading } from "./Loading";
import { Map } from "./Map";


export const Deatils = () => {

    const { isLoading, weatherData: data, isError } = useSelector((state) => state, shallowEqual);
    console.log('data:', data)

    const dispatch = useDispatch();
    const toast = useToast();

    useEffect(() => {
        let weather = getItem("weather");
        console.log('weather:', weather)
        !weather && dispatch(getWeatherByLocation(toast));

    }, []);



    return isLoading ? (
        <Loading />
    ) : isError ? (
        <Error />
    ) : (
        <>
            <Box maxW={'1300px'} m={['30px auto']} p={'20px'} h={'560px'}>
                <Grid gridTemplateColumns={['100%', 'repeat(2, 1fr)', 'repeat(2, 1fr)', '30% 27.5% 38%']} gap={'30px'}>
                    <Newbox>
                        <Box color={'#5e82f4'} px={'20px'} py={'30px'} textAlign={'center'}>
                            <Heading>{data.name}</Heading>
                            <Heading fontSize={'120px'}>{Math.round(data.main.temp - 273)}<sup>o</sup>C</Heading>
                            <Heading>{data.weather[0].main}</Heading>
                        </Box>
                    </Newbox>
                    <Newbox>
                        <Grid templateColumns={'50% 50%'} h={'100%'} p={'8px'}>
                            <Box py={'10px'} pl={'15%'}>
                                {['Felt Temp.', 'Humidity', 'Wind', 'Visibility', 'Max Temp.', 'Min Temp.'].map((e, i) => (
                                    <Text key={i} color={'#5e82f4'} fontWeight={500} mt={'15px'} fontSize={'18px'} >{e}</Text>
                                ))}
                            </Box>
                            <Box borderRadius={'30px'} bg={'#5e82f4'} py={'10px'} pl={'15%'}>
                                <NewText>{celsius(data.main.feels_like)}<sup>o</sup> C</NewText>
                                <NewText>{data.main.humidity}%</NewText>
                                <NewText>{(data.wind.speed * 3.6).toFixed(2)} Km/h</NewText>
                                <NewText>{data.visibility * 0.001} Km</NewText>
                                <NewText>{celsius(data.main.temp_max)}<sup>o</sup> C</NewText>
                                <NewText>{celsius(data.main.temp_min)}<sup>o</sup> C</NewText>
                            </Box>
                        </Grid>
                    </Newbox>
                    <Newbox>
                        {/* <Map city={data.name} /> */}
                    </Newbox>

                </Grid>
            </Box>
        </>
    );
};


const Newbox = ({ children }) => {
    return (
        <Box overflow={'hidden'} shadow={'0px 0px 30px 6px #E2E2E2'} borderRadius={'30px'} h={'300px'}>
            {children}
        </Box>
    )
}

const NewText = ({ children }) => <Text color={'white'} fontWeight={500} mt={'15px'} fontSize={'18px'}>{children}</Text>

