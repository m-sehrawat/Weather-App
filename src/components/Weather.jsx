import axios from "axios";
import { Children, useEffect, useState } from "react";
import { Map } from "./Map";
import { weatherAppAPI } from "../helpers/API"
import { Navbar } from "./Navbar";
import { Box, Button, Flex, Grid, Heading } from "@chakra-ui/react";
import { Deatils } from "./Details";
import { getDataSuccess, getWeatherByCity, getWeatherByLocation } from "../redux/actions";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getItem, setItem } from "../helpers/localStorage";
import { Loading } from "./Loading";
import { Error } from "./Error";



export const Weather = () => {

    const dispatch = useDispatch();
    const { isLoading, weatherData, isError } = useSelector((state) => state, shallowEqual);
    console.log('isLoading:', isLoading)
    console.log('weatherData:', weatherData)
    console.log('isError:', isError)

    // useEffect(() => {
    //     let wether = getItem("weather");
    //     !wether && dispatch(getWeatherByLocation());
    // }, []);




    // const getDataCity = async (city) => {
    //     try {
    //         let res = await axios.get(`/weather?q=${city}&appid=${weatherAppAPI}`);
    //         setData(res.data);
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    // const success = async (position) => {
    //     let { latitude, longitude } = position.coords;
    //     try {
    //         let res = await axios.get(`/weather?lat=${latitude}&lon=${longitude}&appid=${weatherAppAPI}`);
    //         setData(res.data);
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    // const getDataLocation = () => navigator.geolocation.getCurrentPosition(success);


    return (
        <>
            <Navbar />
            {/* <button onClick={() => { getDataCity("delhi") }}>City</button> */}
            {/* <button onClick={getDataLocation}>Current Location</button> */}

            {/* <Map city={'Delhi'} /> */}

            {/* <Button onClick={abc} >Clickme</Button> */}

            <Deatils />
        </>
    );
};
