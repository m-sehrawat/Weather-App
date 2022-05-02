import { getItem } from "../helpers/sessionStorage";
import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS } from "./actionTypes";

const initState = {
    isLoading: getItem("weather") ? false : true,
    weatherData: getItem("weather") ? getItem("weather").weatherData : {},
    forcastData: getItem("weather") ? getItem("weather").forcastData : [],
    isError: false
}

export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_DATA_LOADING:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case GET_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                weatherData: payload.weatherData,
                forcastData: payload.forcastData
            };
        case GET_DATA_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        default:
            return state;
    }
}