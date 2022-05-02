import axios from "axios";
import { weatherAppAPI } from "../helpers/API";
import { myToast } from "../helpers/extraFunctions";
import { setItem } from "../helpers/sessionStorage";
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

export const getWeatherByLocation = (toast) => (dispatch) => {

    const success = async (position) => {
        try {
            let { latitude, longitude } = position.coords;
            dispatch(getDataLoading());
            let res = await axios.get(`/weather?lat=${latitude}&lon=${longitude}&appid=${weatherAppAPI}`);
            dispatch(getDataSuccess(res.data));
            setItem("weather", res.data);
            myToast(toast, "Your location weather updated", "success")
        } catch (err) {
            console.log(err);
            dispatch(getDataError());
        }
    }

    const error = (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        myToast(toast, "Please turn on your location", "error")
    }

    navigator.geolocation.getCurrentPosition(success, error);
}

export const getWeatherByCity = (city, toast) => async (dispatch) => {
    try {
        dispatch(getDataLoading());
        let res = await axios.get(`/weather?q=${city}&appid=${weatherAppAPI}`);
        dispatch(getDataSuccess(res.data));
        setItem("weather", res.data);
        myToast(toast, "City weather data updated", "success");
    } catch (err) {
        console.log(err);
        dispatch(getDataError());
        myToast(toast, "City weather data doesn't exist", "error");
    }
}

export const syncData = (city, toast) => async (dispatch) => {
    try {
        let res = await axios.get(`/weather?q=${city}&appid=${weatherAppAPI}`);
        dispatch(getDataSuccess(res.data));
        setItem("weather", res.data);
        myToast(toast, "Data sync successfully", "success");
    } catch (err) {
        console.log(err);
        dispatch(getDataError());
        myToast(toast, "City weather data doesn't exist", "error");
    }
}