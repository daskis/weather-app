import React from 'react';
import './App.css';
import "./styles/global.scss"
import "./styles/reset.scss"
import SearchCity from "./components/SearchСity/SearchСity";
import AppRouter from "./components/AppRouter/AppRouter";
import SideMenu from "./components/SideMenu/SideMenu";

function App() {
    return (
        <div className="App light">
            <SideMenu/>
            <AppRouter/>
        </div>
    );
}

export default App;
