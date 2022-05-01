import axios from "axios";
import { useState } from "react";
import { API } from "../helpers/API";



export const Weather = () => {

    const [data, setData] = useState({});
    console.log('data:', data)


    const getDataCity = async (city) => {
        try {
            let res = await axios.get(`/weather?q=${city}&appid=${API}`);
            setData(res.data);
        } catch (err) {
            console.log(err)
        }
    }

    const success = async (position) => {
        let { latitude, longitude } = position.coords;
        try {
            let res = await axios.get(`/weather?lat=${latitude}&lon=${longitude}&appid=${API}`);
            setData(res.data);
        } catch (err) {
            console.log(err)
        }
    }

    const getDataLocation = () => navigator.geolocation.getCurrentPosition(success);


    return (
        <>
            <button onClick={() => { getDataCity("chennai") }}>City</button>
            <button onClick={getDataLocation}>Current Location</button>

            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe width="600"
                        height="500"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0">
                    </iframe>
                </div>
            </div>
        </>
    );
};