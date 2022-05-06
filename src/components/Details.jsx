import { Box, Flex, Grid, Heading, Icon, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { celsius } from "../helpers/extraFunctions";
import { getItem } from "../helpers/sessionStorage";
import { getWeatherByLocation, syncData } from "../redux/actions";
import { Error } from "./Error";
import { Loading } from "./Loading";
import { Map } from "./Map";
import { FaSyncAlt } from "react-icons/fa";
import { Newbox, NewText } from "./SmallComponents";
import { Forcast } from "./Forcast";


export const Deatils = () => {

    const { isLoading, weatherData: data, forcastData, isError } = useSelector((state) => state, shallowEqual);
    const [isRotate, setIsRotate] = useState(false);
    const dispatch = useDispatch();
    const toast = useToast();

    useEffect(() => {
        let weather = getItem("weather");
        !weather && dispatch(getWeatherByLocation(toast));
    }, []);

    const handleSyncData = () => {
        setIsRotate(true);
        dispatch(syncData(data.name, toast))
    }

    return isLoading ? (
        <Loading />
    ) : isError ? (
        <Error />
    ) : (
        <>
            <Box maxW={'1400px'} m={'20px auto 5px'} p={'20px'} minH={'550px'}>
                <Grid gridTemplateColumns={['100%', 'repeat(2, 1fr)', 'repeat(2, 1fr)', '30% 27.5% 38%']} gap={'30px'}>
                    <Newbox>
                        <Box color={'#5e82f4'} p={'20px'} textAlign={'center'}>
                            <Flex justify={'end'}>
                                <Icon
                                    onClick={handleSyncData}
                                    onAnimationEnd={() => { setIsRotate(false) }}
                                    className={isRotate ? "iconRotate" : undefined}
                                    cursor={'pointer'} w={'23px'} h={'23px'} as={FaSyncAlt}
                                />
                            </Flex>
                            <Heading>{data.name}</Heading>
                            <Heading fontSize={['100px', '120px', '120px', '100px', '120px']}>{Math.round(data.main.temp - 273)}<sup>o</sup>C</Heading>
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
                                <NewText>{(data.visibility * 0.001).toFixed(2)} Km</NewText>
                                <NewText>{celsius(data.main.temp_max)}<sup>o</sup> C</NewText>
                                <NewText>{celsius(data.main.temp_min)}<sup>o</sup> C</NewText>
                            </Box>
                        </Grid>
                    </Newbox>

                    <Newbox>
                        <Map city={data.name} />
                    </Newbox>
                </Grid>

                <Grid mt={'40px'} templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)', 'repeat(5, 1fr)', 'repeat(8, 1fr)']} gap={'20px'}>
                    {forcastData.map((e, i) => <Forcast key={i} data={e} />)}
                </Grid>

                <div className="tagLine">
                    <p id="madeByMohit">Made with ❤️ by Mohit Sehrawat</p>
                </div>
            </Box >
        </>
    );
};






