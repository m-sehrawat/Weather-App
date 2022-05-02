import axios from "axios";
import { weatherAppAPI } from "../helpers/API";
import { setItem } from "../helpers/localStorage";
import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS } from "./actionTypes";

export const getDataLoading = () => {
    return { type: GET_DATA_LOADING };
}

export const getDataSuccess = (payload) => {
    return { type: GET_DATA_SUCCESS, payload };
}

export const getDataError = () => {
    return { type: GET_DATA_ERROR };
}

export const getWeatherByLocation = () => (dispatch) => {

    const success = async (position) => {
        try {
            let { latitude, longitude } = position.coords;
            dispatch(getDataLoading());
            let res = await axios.get(`/weather?lat=${latitude}&lon=${longitude}&appid=${weatherAppAPI}`);
            dispatch(getDataSuccess(res.data));
            setItem("weather", res.data);
        } catch (err) {
            console.log(err);
            dispatch(getDataError());
        }
    }

    const error = (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error);
}

export const getWeatherByCity = (city) => async (dispatch) => {
    try {
        dispatch(getDataLoading());
        let res = await axios.get(`/weather?q=${city}&appid=${weatherAppAPI}`);
        dispatch(getDataSuccess(res.data));
    } catch (err) {
        console.log(err);
        dispatch(getDataError());
    }
}