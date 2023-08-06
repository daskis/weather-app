import React from 'react';
import cls from "./DailyWeather.module.scss";
import { convertToAMPM } from "../../utils/helpers/convertToAMPM";
import { getWeatherDescriptionAndIcon, isDay } from "../../utils/helpers/convertCodeToTextAndIcon";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { DynamicSVG } from "../../pages/WeatherPage/WeatherPage";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {getTransformedWeatherData} from "../../utils/helpers/settings";

const DailyWeather = () => {
    const dailyForecast = useSelector((state: RootState) => state.weather.dailyWeather);
    const { tempUnit, windUnit, pressureUnit, distanceUnit } = getTransformedWeatherData();

    return (
        <>
            {dailyForecast && dailyForecast.hourly && dailyForecast.hourly.temperature_2m && (
                <div className={cls.daily}>
                    <p>Прогноз на сегодня</p>
                    <Swiper
                        /*@ts-ignore*/
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        className={cls.swiper}
                        spaceBetween={30}
                        breakpoints={{
                            200: {
                                slidesPerView: 2,
                            },
                            400: {
                                slidesPerView: 3,
                            },
                            600: {
                                slidesPerView: 4,
                            },
                        }}
                        slidesPerView={4}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {dailyForecast.hourly.time.slice(0, 24).map((time, index) => {
                            const convertedTime = convertToAMPM(time);
                            const weatherCode = dailyForecast.hourly.weathercode[index];
                            const isDayTime = isDay(time); // Check if it's day or night
                            const { description, icon } = getWeatherDescriptionAndIcon(weatherCode, isDayTime);
                            const temp = tempUnit === 'F' ? Math.round((Math.round(dailyForecast.hourly.temperature_2m[index]) * 9) / 5 + 32) : Math.round(Math.round(dailyForecast.hourly.temperature_2m[index]));


                            return (
                                <SwiperSlide key={index}>
                                    <div className={cls.dailySlide}>
                                        <p className={cls.dailyTime}>{convertedTime}</p>
                                        <DynamicSVG svgPath={icon} alt={description} />
                                        <h3 className={cls.dailyTemp}>{temp}&deg;</h3>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            )}
        </>
    );
};

export default DailyWeather;
