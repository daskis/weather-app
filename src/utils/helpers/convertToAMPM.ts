export function convertToAMPM(dateTimeString:string) {
    const [date, time] = dateTimeString.split("T");
    const [hour, minute] = time.split(":");
    let hourInt = parseInt(hour);

    const ampm = hourInt >= 12 ? "PM" : "AM";
    hourInt = hourInt % 12 || 12;

    return `${hourInt}:${minute} ${ampm}`;
}
