import React from 'react';
import cls from "./WeekWeather.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { convertToAMPM } from "../../utils/helpers/convertToAMPM";
import { getWeatherDescriptionAndIcon, isDay } from "../../utils/helpers/convertCodeToTextAndIcon";
import { DynamicSVG } from "../../pages/WeatherPage/WeatherPage";
import { convertTimeToWeekDay } from "../../utils/helpers/convertTimeToWeekDay";
import {getTransformedWeatherData} from "../../utils/helpers/settings";

const WeekWeather = () => {
    const dailyWeather = useSelector((state: RootState) => state.weather.dailyWeather);
    const { tempUnit, windUnit, pressureUnit, distanceUnit } = getTransformedWeatherData();

    const renderItem = () => {
        if (dailyWeather && dailyWeather.hourly && dailyWeather.hourly.time.length) {
            const items = [];

            for (let i = 0; i < dailyWeather.hourly.time.length; i += 24) {
                const dayTime = dailyWeather.hourly.time[i + 12];

                const convertedDayTime = dayTime ? convertToAMPM(dayTime) : '';


                const dayTemperature = tempUnit === 'F' ? Math.round((dailyWeather.hourly.temperature_2m[i] * 9) / 5 + 32) : Math.round(dailyWeather.hourly.temperature_2m[i]);
                const nightTemperature = tempUnit === 'F' ? Math.round((dailyWeather.hourly.temperature_2m[i + 12] * 9) / 5 + 32) : Math.round(dailyWeather.hourly.temperature_2m[i + 12]);


                const dayWeatherCode = dailyWeather.daily.weathercode[i / 24]; // Get the weather code for the day

                const isDayTime = isDay(dayTime); // Check if it's day or night
                const {
                    description: dayDescription,
                    icon: dayIcon
                } = getWeatherDescriptionAndIcon(dayWeatherCode, isDayTime);


                const date = dailyWeather.hourly.time[i].split('T')[0];
                const dayOfWeek = convertTimeToWeekDay(dailyWeather.hourly.time[i]);
                const currentDate = new Date().toLocaleDateString('ru-RU').split('.').reverse().join('-');
                const isToday = date === currentDate; // Check if the current date is today

                items.push(
                    <li className={cls.day} key={i}>
                        {isToday ? <p className={cls.dayOfWeek}>Сегодня</p> :
                            <p className={cls.dayOfWeek}>{dayOfWeek}</p>} {/* Display "Сегодня" for today */}
                        <div className={cls.temp}>
                            <DynamicSVG svgPath={dayIcon} alt={dayDescription} /> {/* Display the daytime weather icon */}
                            <div>
                                <p className={cls.nightTemp}>{Math.round(nightTemperature)}&deg;</p>
                                /<p className={cls.dayTemp}>{Math.round(dayTemperature)}&deg;</p>
                            </div>
                        </div>
                    </li>
                );

                if (items.length >= 7) {
                    // Break the loop after 7 days
                    break;
                }
            }
            return items;
        }
    };

    return (
        <div className={cls.wrapper}>
            <p className={cls.title}>Прогноз на 7 дней</p>
            <ul className={cls.list}>
                {renderItem()}
            </ul>
        </div>
    );
};

export default WeekWeather;
