// CurrentWeather.tsx

import React from 'react';
import cls from "./CurrentWeather.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { convertToAMPM } from "../../utils/helpers/convertToAMPM";
import { getWeatherDescriptionAndIcon, isDay } from "../../utils/helpers/convertCodeToTextAndIcon";
import { DynamicSVG } from "../../pages/WeatherPage/WeatherPage";
import {getTransformedWeatherData} from "../../utils/helpers/settings";

const CurrentWeather = () => {
    const currentWeather = useSelector((state: RootState) => state.weather.currentWeather);
    const cityCoordinates = useSelector((state: RootState) => state.searchCity);
    let city = localStorage.getItem("currentCity");

    // Получаем выбранные настройки из localStorage и выполняем трансформацию
    const { tempUnit, windUnit, pressureUnit, distanceUnit } = getTransformedWeatherData();

    if (currentWeather.time) {
        // Применяем трансформацию к данным из currentWeather
        const temperature = tempUnit === 'F' ? Math.round((currentWeather.temperature_2m * 9) / 5 + 32) : Math.round(currentWeather.temperature_2m);
        const precipitationProbability = currentWeather.precipitation_probability;
        // Дополнительные трансформации для других параметров, если необходимо

        // Остальной код компонента без изменений
        const weatherCode: number = currentWeather.weathercode;
        const convertedTime = convertToAMPM(currentWeather.time);
        const isDayTime = isDay(currentWeather.time); // Check if it's day or night
        const { description, icon } = getWeatherDescriptionAndIcon(weatherCode, isDayTime);

        return (
            <div className={cls.current}>
                <div className={cls.currentInfo}>
                    <div className={cls.currentPosition}>
                        <h1>{city}</h1>
                        <p>Вероятность осадков {precipitationProbability}%</p>
                    </div>
                    <h2 className={cls.currentTemp}>{temperature}&deg;</h2>
                </div>
                <DynamicSVG svgPath={icon} alt={description} /> {/* Display the appropriate weather icon */}
            </div>
        );
    } else {
        return <div>Выберите город</div>
    }
};

export default CurrentWeather;
