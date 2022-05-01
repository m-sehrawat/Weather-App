import axios from "axios";
import { Children, useState } from "react";
import { Map } from "./Map";
import { weatherAppAPI } from "../helpers/API"
import { Navbar } from "./Navbar";
import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import { Deatils } from "./Details";



export const Weather = () => {

    const [data, setData] = useState({});
    console.log('data:', data)


    const getDataCity = async (city) => {
        try {
            let res = await axios.get(`/weather?q=${city}&appid=${weatherAppAPI}`);
            setData(res.data);
        } catch (err) {
            console.log(err)
        }
    }

    const success = async (position) => {
        let { latitude, longitude } = position.coords;
        try {
            let res = await axios.get(`/weather?lat=${latitude}&lon=${longitude}&appid=${weatherAppAPI}`);
            setData(res.data);
        } catch (err) {
            console.log(err)
        }
    }

    const getDataLocation = () => navigator.geolocation.getCurrentPosition(success);


    return (
        <>
            <Navbar />
            {/* <button onClick={() => { getDataCity("delhi") }}>City</button> */}
            {/* <button onClick={getDataLocation}>Current Location</button> */}

            {/* <Map city={'Delhi'} /> */}

            <Deatils />
        </>
    );
};
