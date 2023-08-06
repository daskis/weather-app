import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// Получаем API_KEY из переменных среды
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

// Определение точки доступа к API по координатам
const weatherByCoordinatesEndpoint = {
    query: (lat: number | null, lon: number | null) => `forecast?latitude=${lat ?? ''}&longitude=${lon ?? ''}&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,rain,weathercode,pressure_msl,surface_pressure,cloudcover,visibility,windspeed_10m&daily=weathercode,sunrise,sunset&timezone=Europe%2FMoscow`,
    transformResponse: (response: any) => response,
};
const currentWeatherByCoordinatesEndpoint = {
    query: (lat: number | null, lon: number | null) => `forecast?latitude=${lat ?? ''}&longitude=${lon ?? ''}&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,rain,weathercode,pressure_msl,surface_pressure,cloudcover,visibility,windspeed_10m&daily=weathercode,sunrise,sunset&timezone=Europe%2FMoscow&forecast_days=1`,
    transformResponse: (response: any) => {
        const dateIdx = new Date().getHours();
        const weatherData = response.hourly;
        console.log(response)
        if (
            weatherData &&
            Array.isArray(weatherData.time) &&
            Array.isArray(weatherData.temperature_2m) &&
            Array.isArray(weatherData.relativehumidity_2m) &&
            Array.isArray(weatherData.dewpoint_2m) &&
            Array.isArray(weatherData.apparent_temperature) &&
            Array.isArray(weatherData.precipitation_probability) &&
            Array.isArray(weatherData.precipitation) &&
            Array.isArray(weatherData.weathercode) &&
            Array.isArray(weatherData.pressure_msl) &&
            Array.isArray(weatherData.surface_pressure) &&
            Array.isArray(weatherData.cloudcover) &&
            Array.isArray(weatherData.visibility) &&
            Array.isArray(weatherData.windspeed_10m)
        ) {
            return {
                time: weatherData.time[dateIdx],
                temperature_2m: weatherData.temperature_2m[dateIdx],
                relativehumidity_2m: weatherData.relativehumidity_2m[dateIdx],
                dewpoint_2m: weatherData.dewpoint_2m[dateIdx],
                apparent_temperature: weatherData.apparent_temperature[dateIdx],
                precipitation_probability: weatherData.precipitation_probability[dateIdx],
                precipitation: weatherData.precipitation[dateIdx],
                weathercode: response.daily.weathercode[0],
                pressure_msl: weatherData.pressure_msl[dateIdx],
                surface_pressure: weatherData.surface_pressure[dateIdx],
                cloudcover: weatherData.cloudcover[dateIdx],
                visibility: weatherData.visibility[dateIdx],
                windspeed_10m: weatherData.windspeed_10m[dateIdx],
                sunSet: response.daily.sunrise[0],
                moonSet: response.daily.sunset[0]
            };
        } else {
            console.log('Invalid weather data format.');
            return {};
        }
    },
};

// Создаем weatherApi с точками доступа
export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.open-meteo.com/v1'}),
    endpoints: (builder) => ({
        // Точка доступа по координатам
        getCurrentWeatherByCoordinates: builder.query<any, { lat: number | null; lon: number | null }>({ // Здесь вместо number используем number | null
            query: ({lat, lon}) => currentWeatherByCoordinatesEndpoint.query(lat, lon),
            transformResponse: currentWeatherByCoordinatesEndpoint.transformResponse,
        }),
        getWeatherByCoordinates: builder.query<any, { lat: number | null; lon: number | null }>({ // Здесь вместо number используем number | null
            query: ({lat, lon}) => weatherByCoordinatesEndpoint.query(lat, lon),
            transformResponse: weatherByCoordinatesEndpoint.transformResponse,
        }),
    }),
});

// Экспортируем сгенерированные хуки для запросов к API
export const {
    useGetCurrentWeatherByCoordinatesQuery,
    useLazyGetCurrentWeatherByCoordinatesQuery,
    useGetWeatherByCoordinatesQuery,
    useLazyGetWeatherByCoordinatesQuery
} = weatherApi;
