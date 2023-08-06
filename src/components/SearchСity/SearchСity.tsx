import React, {useEffect, useState} from 'react';
import { AddressSuggestions, DaDataAddress, DaDataSuggestion } from 'react-dadata';
import { useDispatch } from 'react-redux';
import { updateValue } from "../../redux/slices/searchCitySlice";
import 'react-dadata/dist/react-dadata.css';
import "./SearchCity.scss"
import locationIcon from "../../assets/icons/location.svg"
interface CityCoordinates {
    lat: number;
    lon: number;
    city: string | null;
}


const SearchCity: React.FC = () => {

    const [value, setValue] = useState<DaDataSuggestion<DaDataAddress> | null>(null);
    const dispatch = useDispatch();


    const getGeo = () => {
        navigator.geolocation.getCurrentPosition((position) => {

            const lat = position.coords.latitude
            const lon = position.coords.longitude
            const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address";
            const token = process.env.REACT_APP_DADATA_API_KEY
            const query = { lat, lon };
            const options = {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "Token " + token
                },
                body: JSON.stringify(query)
            }

            // @ts-ignore
            fetch(url, options)
                .then(response => response.json())
                .then(result => {
                    dispatch(
                        updateValue({
                            lat,
                            lon,
                            city: result.suggestions[result.suggestions.length-1].value
                        })
                    );
                })
                .catch(error => console.log("error", error));

        })
    }

    // Обработчик изменения значения в поисковом поле
    const handleAddressChange = (newValue: DaDataSuggestion<DaDataAddress> | null) => {
        setValue(newValue);

        const city = newValue?.data.city || null;
        const lat = Number(newValue?.data.geo_lat) || NaN;
        const lon = Number(newValue?.data.geo_lon) || NaN;

        // Dispatch the updated value to the store, including the city name
        dispatch(
            updateValue({
                lat,
                lon,
                city,
            })
        );
    };

    return (
        <div className={"searchWrapper"}>
            <div className="search">
                <AddressSuggestions
                    /*@ts-ignore*/
                    token={process.env.REACT_APP_DADATA_API_KEY} value={value} onChange={handleAddressChange}
                />
            </div>
            <img
                onClick={getGeo}
                src={locationIcon} alt=""/>
        </div>
    );
};

export default SearchCity;
