import { googleMapAPI } from "../helpers/API";

export const Map = ({ city }) => {

    return (
        <div>
            <iframe
                width="100%"
                height="300"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${googleMapAPI}&q=${city}`}>
            </iframe>
        </div>
    );
};