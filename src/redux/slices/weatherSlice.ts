import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Define the initial state

export interface DailyInterface {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    hourly_units: HourlyUnits;
    hourly: Hourly;
    daily: {
        time: string[];
        weathercode: number[]; // Add 'weathercode' property
        sunrise: string[];
        sunset: string[];
    }
}


export interface HourlyUnits {
    time: string;
    temperature_2m: string;
    apparent_temperature: string;
    precipitation_probability: string;
    precipitation: string;
    rain: string;
    pressure_msl: string;
    surface_pressure: string;
    visibility: string;
    windspeed_10m: string;
}

export interface Hourly {
    time: string[];
    temperature_2m: number[];
    apparent_temperature: number[];
    precipitation_probability: number[];
    precipitation: number[];
    rain: number[];
    weathercode: number[];
    pressure_msl: number[];
    surface_pressure: number[];
    visibility: number[];
    windspeed_10m: number[];
}

interface WeatherState {
    currentWeather: {
        apparent_temperature: number;
        cloudcover: number;
        dewpoint_2m: number;
        precipitation: number;
        precipitation_probability: number;
        pressure_msl: number;
        relativehumidity_2m: number;
        surface_pressure: number;
        temperature_2m: number;
        time: string;
        visibility: number;
        weathercode: number;
        windspeed_10m: number;
        sunSet: string;
        moonSet: string;
    };
    dailyWeather: DailyInterface;
}

const initialState: WeatherState = {
    currentWeather: {
        apparent_temperature: 0,
        cloudcover: 0,
        dewpoint_2m: 0,
        precipitation: 0,
        precipitation_probability: 0,
        pressure_msl: 0,
        relativehumidity_2m: 0,
        surface_pressure: 0,
        temperature_2m: 0,
        time: "",
        visibility: 0,
        weathercode: 0,
        windspeed_10m: 0,
        sunSet: "",
        moonSet: "",
    },
    dailyWeather: {
        latitude: 0,
        longitude: 0,
        generationtime_ms: 0,
        utc_offset_seconds: 0,
        timezone: "",
        timezone_abbreviation: "",
        elevation: 0,
        hourly_units: {
            time: "",
            temperature_2m: "",
            apparent_temperature: "",
            precipitation_probability: "",
            precipitation: "",
            rain: "",
            pressure_msl: "",
            surface_pressure: "",
            visibility: "",
            windspeed_10m: "",
        },
        hourly: {
            time: [],
            temperature_2m: [],
            apparent_temperature: [],
            precipitation_probability: [],
            precipitation: [],
            rain: [],
            weathercode: [],
            pressure_msl: [],
            surface_pressure: [],
            visibility: [],
            windspeed_10m: [],
        },
        daily: {
            time: [],
            weathercode: [],
            sunrise: [],
            sunset: []
        }
    },
};

// Create the slice
const weatherSlice = createSlice({
    name: 'weatherSlice',
    initialState,
    reducers: {
        updateCurrentWeather: (state, action: PayloadAction<WeatherState["currentWeather"]>) => {
            state.currentWeather = action.payload;
        },
        updateDailyWeather: (state, action: PayloadAction<WeatherState["dailyWeather"]>) => {
            state.dailyWeather = action.payload;
        },
    },
});

// Export the actions
export const {updateCurrentWeather, updateDailyWeather} = weatherSlice.actions;

// Export the reducer
export default weatherSlice.reducer;
