export function convertTimeToWeekDay(dateTimeString:string) {
    const date = new Date(dateTimeString);
    const daysOfWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
}