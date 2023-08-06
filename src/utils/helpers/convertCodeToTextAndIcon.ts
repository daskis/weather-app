interface WeatherData {
    description: string;
    icon: string;
}

export function getWeatherIcon(weatherCode: number, isDayTime: boolean): string {

    const daySuffix = isDayTime ? "-day" : "-night";
    if (weatherCode < 3) {
        const [minus, state ] = daySuffix.split("-")
        return `${state}`;
    }
    const weatherGroup = Math.floor(weatherCode / 10);
    switch (weatherGroup) {
        case 0:
            return "cloud" + daySuffix;
        case 1:
            return "fog" + daySuffix;
        case 2:
            return "lightning" + daySuffix;
        case 3:
            return "drizzle" + daySuffix;
        case 4:
            return "rain" + daySuffix;
        case 5:
            return "snow" + daySuffix;
        case 6:
            return "blowing-snow" + daySuffix;
        case 7:
            return "hail" + daySuffix;
        case 8:
            return "haze" + daySuffix;
        case 9:
            return "thunderstorm" + daySuffix;
        default:
            return "unknown-icon";
    }
}

export function isDay(time: string): boolean {
    const [hour, ampm] = time.split("T");
    const hourInt = parseInt(ampm);
    if (hourInt > 6 && hourInt < 19) {
        return true
    }
    else {
        return false
    }
}

export function getWeatherDescriptionAndIcon(weatherCode: number, isDayTime: boolean): WeatherData {
    const weatherDescription = getWeatherDescription(weatherCode);
    const weatherIcon = getWeatherIcon(weatherCode, isDayTime);

    return {
        description: weatherDescription,
        icon: weatherIcon,
    };
}
function getWeatherDescription(weatherCode: number): string {
    switch (weatherCode) {
        case 0:
            return "Облака наблюдаются";
        case 1:
            return "Облака рассеиваются";
        case 2:
            return "Состояние неба не изменилось";
        case 3:
            return "Облака образуются";
        case 4:
            return "Ограничение видимости из-за дыма";
        case 5:
            return "Мгла";
        case 6:
            return "Пыль в воздухе";
        case 7:
            return "Пыль или песок подняты ветром";
        case 8:
            return "Развитые пылевые или песчаные вихри";
        case 9:
            return "Песчаная или пыльная буря";
        case 10:
            return "Туман";
        case 11:
            return "Участки тумана";
        case 12:
            return "Преимущественно туман";
        case 13:
            return "Видна молния, не слышно грозы";
        case 14:
            return "Осадки видны, но не достигают земли";
        case 15:
            return "Осадки видны, достигают земли, но далеко";
        case 16:
            return "Осадки видны, достигают земли, недалеко";
        case 17:
            return "Гроза, но без осадков";
        case 18:
            return "Шквалы";
        case 19:
            return "Воронка";
        case 20:
            return "Морось или мелкий снег";
        case 21:
            return "Дождь (не замерзающий)";
        case 22:
            return "Снег";
        case 23:
            return "Дождь и снег или град";
        case 24:
            return "Замерзающая морось или дождь";
        case 25:
            return "Кратковременные дожди";
        case 26:
            return "Кратковременные снегопады или дождь и снег";
        case 27:
            return "Кратковременные градины";
        case 28:
            return "Туман или мгла";
        case 29:
            return "Гроза (с или без осадков)";
        case 30:
            return "Легкий или умеренный песчаный/пыльный вихрь";
        case 31:
            return "Песчаный/пыльный вихрь без изменений";
        case 32:
            return "Песчаный/пыльный вихрь усиливается";
        case 33:
            return "Сильный песчаный/пыльный вихрь";
        case 34:
            return "Песчаный/пыльный вихрь без изменений";
        case 35:
            return "Песчаный/пыльный вихрь усиливается";
        case 36:
            return "Легкий или умеренный снежный вихрь (ниже уровня глаз)";
        case 37:
            return "Сильный дрейфующий снег";
        case 38:
            return "Легкий или умеренный снежный вихрь (выше уровня глаз)";
        case 39:
            return "Сильный дрейфующий снег";
        case 40:
            return "Туман или мгла вдали от станции, простирающиеся выше уровня наблюдателя";
        case 41:
            return "Туман или мгла в отдельных участках";
        case 42:
            return "Туман или мгла, небо видно, становится тоньше";
        case 43:
            return "Туман или мгла, небо не видно";
        case 44:
            return "Туман или мгла, небо видно, без изменений";
        case 45:
            return "Туман или мгла, небо не видно";
        case 46:
            return "Туман или мгла, небо видно, становится плотнее";
        case 47:
            return "Туман, с наледью, небо видно";
        case 48:
            return "Туман, с наледью, небо не видно";
        case 49:
            return "Туман, с наледью, небо видно, без изменений";
        case 50:
            return "Легкий или умеренный дождь";
        case 51:
            return "Дождь, непрерывный";
        case 52:
            return "Легкий или умеренный дождь, периодический";
        case 53:
            return "Дождь, периодический";
        case 54:
            return "Ливень, периодический";
        case 55:
            return "Дождь, ливень";
        case 56:
            return "Легкий дождь, замерзающий";
        case 57:
            return "Умеренный или сильный дождь, замерзающий";
        case 58:
            return "Легкий дождь и снег";
        case 59:
            return "Умеренный или сильный дождь и снег";
        case 60:
            return "Легкий или умеренный снег";
        case 61:
            return "Снег, непрерывный";
        case 62:
            return "Легкий или умеренный снег, периодический";
        case 63:
            return "Снег, периодический";
        case 64:
            return "Сильный снегопад";
        case 65:
            return "Снегопад, непрерывный";
        case 66:
            return "Легкий ледяной дождь";
        case 67:
            return "Умеренный или сильный ледяной дождь";
        case 68:
            return "Легкий дождь и снег";
        case 69:
            return "Умеренный или сильный дождь и снег";
        case 70:
            return "Легкий или умеренный песчаный/пыльный вихрь";
        case 71:
            return "Песчаный/пыльный вихрь без изменений";
        case 72:
            return "Песчаный/пыльный вихрь усиливается";
        case 73:
            return "Сильный песчаный/пыльный вихрь";
        case 74:
            return "Песчаный/пыльный вихрь без изменений";
        case 75:
            return "Песчаный/пыльный вихрь усиливается";
        case 76:
            return "Легкий или умеренный снежный вихрь (ниже уровня глаз)";
        case 77:
            return "Сильный дрейфующий снег";
        case 78:
            return "Легкий или умеренный снежный вихрь (выше уровня глаз)";
        case 79:
            return "Сильный дрейфующий снег";
        case 80:
            return "Легкий ливень";
        case 81:
            return "Умеренный или сильный ливень";
        case 82:
            return "Жестокий ливень";
        case 83:
            return "Ливень со снегом, легкий";
        case 84:
            return "Ливень со снегом, умеренный или сильный";
        case 85:
            return "Легкий снежок";
        case 86:
            return "Умеренный или сильный снежок";
        case 87:
            return "Снежный снежок или град, легкий";
        case 88:
            return "Снежок или град, умеренный или сильный";
        case 89:
            return "Град, легкий";
        case 90:
            return "Град, умеренный или сильный";
        case 91:
            return "Легкий дождь во время наблюдения";
        case 92:
            return "Умеренный или сильный дождь во время наблюдения";
        case 93:
            return "Легкий снег, или дождь и снег, или град во время наблюдения";
        case 94:
            return "Умеренный или сильный снег, или дождь и снег, или град во время наблюдения";
        case 95:
            return "Легкая или умеренная гроза, без града, но с дождем и/или снегом во время наблюдения";
        case 96:
            return "Легкая или умеренная гроза с градом во время наблюдения";
        case 97:
            return "Сильная гроза, без града, но с дождем и/или снегом во время наблюдения";
        case 98:
            return "Гроза, сочетающаяся с песчаным/пыльным вихрем или снежным вихрем во время наблюдения";
        case 99:
            return "Сильная гроза с градом во время наблюдения";
        default:
            return "Неизвестный код погоды";
    }
}