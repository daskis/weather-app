import React from 'react';
import cls from "./SideMenu.module.scss"
// @ts-ignore
import {ReactComponent as WeatherIcon} from "../../assets/icons/cloudy.svg";
import {ReactComponent as ListIcon} from "../../assets/icons/list2.svg";
import {ReactComponent as LogoIcon} from "../../assets/icons/umbrella.svg";
import {ReactComponent as SettingsIcon} from "../../assets/icons/equalizer.svg";
import {Link} from "react-router-dom";


const SideMenu = () => {
        const routes = [
            {
                path: "/",
                element: <Link to={"/"}>
                    <WeatherIcon/>
                    Погода
                </Link>,

            },
            {
                path: "/settings",
                element: <Link to={"/settings"}>
                    <SettingsIcon/>
                    Настройки
                </Link>,
            },
        ]
        return (
            <div className={cls.menu}>
                <ul className={cls.links}>
                    {routes.map((item, i) => (
                        <li className={cls.link} key={item.path}>
                            {item.element}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
;

export default SideMenu;