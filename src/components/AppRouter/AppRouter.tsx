import React from 'react';
import {Routes, Route} from "react-router-dom"
import WeatherPage from "../../pages/WeatherPage/WeatherPage";
import SettingsPage from "../../pages/SettingsPage/SettingsPage";
const AppRouter = () => {
    return (
        <Routes>
            <Route element={<WeatherPage/>} path={"/"}/>
            <Route element={<SettingsPage/>} path={"/settings"}/>
        </Routes>
    );
};

export default AppRouter;