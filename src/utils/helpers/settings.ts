// settings.ts

// Трансформация температуры
export const transformTemperature = (temperature: number, tempUnit: 'C' | 'F'): number => {
    if (tempUnit === 'F') {
        // Конвертируем температуру в градусы Фаренгейта
        return (temperature * 9) / 5 + 32;
    } else {
        // tempUnit === 'C', температура уже в градусах Цельсия, ничего не меняем
        return temperature;
    }
};

// Трансформация скорости ветра
export const transformWindSpeed = (windSpeed: number, speedUnit: 'm/s' | 'km/h'): number => {
    if (speedUnit === 'km/h') {
        // Конвертируем скорость в километры в час
        return windSpeed * 3.6;
    } else {
        // speedUnit === 'm/s', скорость уже в метрах в секунду, ничего не меняем
        return windSpeed;
    }
};

// Трансформация давления
export const transformPressure = (pressure: number, pressureUnit: 'mBar' | 'Bar' | 'Pa' | 'mmHg'): number => {
    switch (pressureUnit) {
        case 'Bar':
            // Конвертируем давление в бары
            return pressure * 0.001;
        case 'Pa':
            // Конвертируем давление в паскали
            return pressure * 100;
        case 'mmHg':
            // Конвертируем давление в мм ртутного столба
            return pressure * 0.00750062;
        default:
            // pressureUnit === 'mBar', давление уже в миллибарах, ничего не меняем
            return pressure;
    }
};

// Трансформация расстояния
export const transformDistance = (distance: number, distanceUnit: 'km' | 'mi'): number => {
    if (distanceUnit === 'mi') {
        // Конвертируем расстояние в мили
        return distance * 0.621371;
    } else {
        // distanceUnit === 'km', расстояние уже в километрах, ничего не меняем
        return distance;
    }
};

// Используем значения из localStorage и выполняем трансформацию
export const getTransformedWeatherData = () => {
    const tempFromStorage = localStorage.getItem('temp');
    const windFromStorage = localStorage.getItem('wind');
    const pressureFromStorage = localStorage.getItem('pressure');
    const distanceFromStorage = localStorage.getItem('distance');

    // Check if the values are not null before processing
    const tempUnit = tempFromStorage && parseInt(tempFromStorage) === 1 ? 'F' : 'C';
    const windUnit = windFromStorage && parseInt(windFromStorage) === 1 ? 'km/h' : 'm/s';
    const pressureValue = pressureFromStorage && parseInt(pressureFromStorage);
    let pressureUnit: 'mBar' | 'Bar' | 'Pa' | 'mmHg';

    // Map the pressure unit based on the stored value, if available
    switch (pressureValue) {
        case 0:
            pressureUnit = 'mBar';
            break;
        case 1:
            pressureUnit = 'Bar';
            break;
        case 2:
            pressureUnit = 'Pa';
            break;
        case 3:
            pressureUnit = 'mmHg';
            break;
        default:
            pressureUnit = 'mBar'; // Default to 'mBar' if no valid value found
            break;
    }

    const distanceUnit = distanceFromStorage && parseInt(distanceFromStorage) === 1 ? 'mi' : 'km';

    return {
        tempUnit,
        windUnit,
        pressureUnit,
        distanceUnit,
    };
};