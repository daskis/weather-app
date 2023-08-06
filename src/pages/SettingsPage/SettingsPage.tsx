// SettingsPage.tsx
import React, { useEffect, useState } from 'react';
import cls from "./SettingsPage.module.scss";
import TabsTag from "../../components/TabsTag/TabsTag";

const SettingsPage = () => {
    const tabs1 = [
        { title: 'цельсий', value: 0 },
        { title: 'фаренгейт', value: 1 },
    ];

    const tabs2 = [
        { title: 'м/c', value: 0 },
        { title: 'км/ч', value: 1 },
    ];
    const tabs3 = [
        { title: 'мБар', value: 0 },
        { title: 'Бар', value: 1 },
        { title: 'Па', value: 2 },
        { title: 'мм.рт.ст', value: 3 },
    ];
    const tabs4 = [
        { title: 'киллометры', value: 0 },
        { title: 'мили', value: 1 },
    ];

    const [temp, setTemp] = useState<number>(() => {
        const tempFromStorage = localStorage.getItem('temp');
        if (tempFromStorage !== null) {
            return parseInt(tempFromStorage);
        }
        return 0;
    });
    const [wind, setWind] = useState<number>(() => {
        const windFromStorage = localStorage.getItem('wind');
        if (windFromStorage !== null) {
            return parseInt(windFromStorage);
        }
        return 0;
    });
    const [pressure, setPressure] = useState<number>(() => {
        const pressureFromStorage = localStorage.getItem('pressure');
        if (pressureFromStorage !== null) {
            return parseInt(pressureFromStorage);
        }
        return 0;
    });
    const [distance, setDistance] = useState<number>(() => {
        const distanceFromStorage = localStorage.getItem('distance');
        if (distanceFromStorage !== null) {
            return parseInt(distanceFromStorage);
        }
        return 0;
    });

    useEffect(() => {
        localStorage.setItem('temp', temp.toString());
    }, [temp]);

    useEffect(() => {
        localStorage.setItem('wind', wind.toString());
    }, [wind]);

    useEffect(() => {
        localStorage.setItem('pressure', pressure.toString());
    }, [pressure]);

    useEffect(() => {
        localStorage.setItem('distance', distance.toString());
    }, [distance]);

    return (
        <div className={cls.wrapper}>
            <h3 className={cls.title}>Основные настройки</h3>
            <ul className={cls.list}>
                <li className={cls.listItem}>
                    <h4 className={cls.text}>
                        Температура
                    </h4>
                    <TabsTag tabs={tabs1} activeTab={temp} onChange={setTemp} />
                </li>
                <li className={cls.listItem}>
                    <h4 className={cls.text}>
                        Скорость ветра
                    </h4>
                    <TabsTag tabs={tabs2} activeTab={wind} onChange={setWind} />
                </li>
                <li className={cls.listItem}>
                    <h4 className={cls.text}>
                        Давление
                    </h4>
                    <TabsTag tabs={tabs3} activeTab={pressure} onChange={setPressure} />
                </li>
                <li className={cls.listItem}>
                    <h4 className={cls.text}>
                        Видимость
                    </h4>
                    <TabsTag tabs={tabs4} activeTab={distance} onChange={setDistance} />
                </li>
            </ul>
        </div>
    );
};

export default SettingsPage;
