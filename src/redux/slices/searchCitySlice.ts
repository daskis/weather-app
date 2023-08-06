import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CityCoordinates {
    lat: number | null;
    lon: number | null;
}

export interface CityCoordinates {
    lat: number | null;
    lon: number | null;
    city: string | null; // Add the city name field
}
const initialState:CityCoordinates = {
    lat: null,
    lon: null,
    city: ""
}
const searchCitySlice = createSlice({
    name: 'searchCity',
    initialState,
    reducers: {
        updateValue: (state, action: PayloadAction<CityCoordinates>) => {
            state.lat = action.payload.lat;
            state.lon = action.payload.lon;
            state.city = action.payload.city; // Update the city name field
            // @ts-ignore
            localStorage.setItem("currentCity", state.city);
        },
    },
});


export const { updateValue } = searchCitySlice.actions;

export default searchCitySlice.reducer;
