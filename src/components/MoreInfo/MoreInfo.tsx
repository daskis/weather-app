import React, {useState} from 'react';
import cls from "./MoreInfo.module.scss";
import feels from "../../assets/moreInfoIcons/feels-like.svg";
import wind from "../../assets/moreInfoIcons/wind.svg";
import rain from "../../assets/moreInfoIcons/chance-of-rain.svg";
import visibility from "../../assets/moreInfoIcons/view-show.svg";
import humidity from "../../assets/moreInfoIcons/precipitation.svg";
import uiIndex from "../../assets/moreInfoIcons/ui-index.svg";
import cloudCover from "../../assets/moreInfoIcons/cloudcover.svg";
import pressure from "../../assets/moreInfoIcons/pressure.svg";
import sunSet from "../../assets/moreInfoIcons/sunset.svg";
import moonSet from "../../assets/moreInfoIcons/moonrise.svg";

import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {convertToAMPM} from "../../utils/helpers/convertToAMPM";
import {
    getTransformedWeatherData,
    transformWindSpeed,
    transformPressure,
    transformDistance
} from "../../utils/helpers/settings";

const MoreInfo = () => {
    const currentWeather = useSelector((state: RootState) => state.weather.currentWeather);
    const [isOpen, setIsOpen] = useState(false);
    const {tempUnit, windUnit, pressureUnit, distanceUnit} = getTransformedWeatherData();
    const temperature = tempUnit === 'F' ? Math.round((Math.round(currentWeather.apparent_temperature) * 9) / 5 + 32) : Math.round(currentWeather.apparent_temperature);
    //@ts-ignore
    const windSpeed = Math.round(transformWindSpeed(currentWeather.windspeed_10m, windUnit));
    //@ts-ignore
    const visibilityValue = Math.round(transformDistance(currentWeather.visibility, distanceUnit));
    //@ts-ignore
    const pressureValue = (transformPressure(currentWeather.pressure_msl, pressureUnit)).toFixed(1);
    const humidityValue = Math.round(currentWeather.relativehumidity_2m);
    const cloudCoverValue = currentWeather.cloudcover;
    const uvIndexValue = currentWeather.weathercode;

    const handleOpen = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <div className={cls.wrapper}>
            <h3 className={cls.title}>Состояние воздуха</h3>
            <div className={cls.col}>

                <button
                    onClick={handleOpen}
                    className={cls.seeMore}>
                    {isOpen ? "скрыть" : "показать"}
                </button>
                {isOpen && (
                    <>
                        <div className={cls.row}>
                            <div>
                                <img src={feels} alt=""/>
                                <h4 className={cls.text}>
                                    температура по ощущению
                                </h4>
                            </div>
                            <p className={cls.info}>{temperature}&deg;</p>
                        </div>
                        <div className={cls.row}>
                            <div>
                                <img src={wind} alt=""/>
                                <h4 className={cls.text}>
                                    скорость ветра
                                </h4>
                            </div>
                            <p className={cls.info}>{windSpeed} {windUnit}</p>
                        </div>
                        <div className={cls.row}>
                            <div>
                                <img src={rain} alt=""/>
                                <h4 className={cls.text}>
                                    шанс осадков
                                </h4>
                            </div>
                            <p className={cls.info}>{currentWeather.precipitation_probability}%</p>
                        </div>
                        <div className={cls.row}>
                            <div>
                                <img src={visibility} alt=""/>
                                <h4 className={cls.text}>
                                    видимость
                                </h4>
                            </div>
                            <p className={cls.info}>{visibilityValue / 1000} {distanceUnit}</p>
                        </div>

                        <div className={cls.row}>
                            <div>
                                <img src={humidity} alt=""/>
                                <h4 className={cls.text}>
                                    влажность
                                </h4>
                            </div>
                            <p className={cls.info}>{humidityValue}%</p>
                        </div>
                        <div className={cls.row}>
                            <div>
                                <img src={cloudCover} alt=""/>
                                <h4 className={cls.text}>
                                    облачность
                                </h4>
                            </div>
                            <p className={cls.info}>{cloudCoverValue}%</p>
                        </div>
                        <div className={cls.row}>
                            <div>
                                <img src={pressure} alt=""/>
                                <h4 className={cls.text}>
                                    атмосферное давление
                                </h4>
                            </div>
                            <p className={cls.info}>{pressureValue} {pressureUnit}</p>
                        </div>
                        <div className={cls.row}>
                            <div>
                                <img src={uiIndex} alt=""/>
                                <h4 className={cls.text}>
                                    ультрафиолетовый индекс
                                </h4>
                            </div>
                            <p className={cls.info}>{uvIndexValue}</p>
                        </div>
                        <div className={cls.row}>
                            <div>
                                <img src={sunSet} alt=""/>
                                <h4 className={cls.text}>
                                    рассвет
                                </h4>
                            </div>
                            <p className={cls.info}>{convertToAMPM(currentWeather.sunSet)}</p>
                        </div>
                        <div className={cls.row}>
                            <div>
                                <img src={moonSet} alt=""/>
                                <h4 className={cls.text}>
                                    закат
                                </h4>
                            </div>
                            <p className={cls.info}>{convertToAMPM(currentWeather.moonSet)}</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default MoreInfo;
