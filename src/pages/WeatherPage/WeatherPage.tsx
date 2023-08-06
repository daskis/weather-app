import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import cls from './WeatherPage.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {updateCurrentWeather, updateDailyWeather} from "../../redux/slices/weatherSlice";
import {
    useLazyGetCurrentWeatherByCoordinatesQuery,
    useLazyGetWeatherByCoordinatesQuery
} from "../../redux/api/weatherApi";
import DailyWeather from "../../components/DailyWeather/DailyWeather";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import WeekWeather from "../../components/WeekWeather/WeekWeather";
import SearchCity from "../../components/SearchСity/SearchСity";
import MoreInfo from "../../components/MoreInfo/MoreInfo";

interface Props {
    svgPath: string;
    alt: string;
}

export const DynamicSVG: React.FC<Props> = ({svgPath, alt}) => {
    const [svgSrc, setSvgSrc] = React.useState<string | null>(null);

    React.useEffect(() => {
        const importSVGComponent = async () => {
            try {
                const importedSVG = await import(`../../assets/weatherIcons/${svgPath}.svg`);
                setSvgSrc(importedSVG.default);
            } catch (error) {
                console.error('Error loading SVG:', error);
            }
        };

        importSVGComponent();
    }, [svgPath]);

    return svgSrc ? <img src={svgSrc} alt={alt}/> : <div>Loading...</div>;
};

const WeatherPage = () => {
    const currentWeather = useSelector((state: RootState) => state.weather.currentWeather);
    const cityCoordinates = useSelector((state: RootState) => state.searchCity);
    const city = useSelector((state: RootState) => state.searchCity.city)
    const lat = cityCoordinates.lat;
    const lon = cityCoordinates.lon;

    const dispatch = useDispatch();

    // Получаем данные из weatherApi с использованием ленивых хуков
    const [getCurrentWeather, {
        data: currentWeatherData,
        isLoading: isLoadingCurrentWeather,
        isError: isErrorCurrentWeather
    }] =
        useLazyGetCurrentWeatherByCoordinatesQuery();
    const [getWeather, {data: weatherData, isLoading: isLoadingWeather, isError: isErrorWeather}] =
        useLazyGetWeatherByCoordinatesQuery();

    useEffect(() => {
        // Если lat и lon равны NaN или null, не выполняем дополнительные действия
        // @ts-ignore
        if (isNaN(lat) || isNaN(lon) || lat === null || lon === null) {
            return;
        }

        // Если есть координаты, вызываем функции из weatherApi
        getCurrentWeather({lat, lon});
        getWeather({lat, lon});
    }, [lat, lon, getCurrentWeather, getWeather]);

    useEffect(() => {
        // Проверяем, что есть данные из getCurrentWeather и обновляем состояние слайса weatherSlice
        if (currentWeatherData) {
            dispatch(updateCurrentWeather(currentWeatherData));
        }

        // Проверяем, что есть данные из getWeather и обновляем состояние слайса weatherSlice
        if (weatherData) {
            dispatch(updateDailyWeather(weatherData));
        }
    }, [currentWeatherData, weatherData, dispatch]);


    // @ts-ignore


    return (
        <div className={cls.weather}>
            <div className={cls.day}>
                <SearchCity/>
                <CurrentWeather/>
                <DailyWeather/>
                <MoreInfo/>
            </div>
            <WeekWeather/>
        </div>
    );
};

export default WeatherPage;
