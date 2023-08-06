export function useAMPMTime(dateTimeString:string) {
    const convertToAMPM = (timeString:string) => {
        const [date, time] = timeString.split("T");
        const [hour, minute] = time.split(":");
        let hourInt = parseInt(hour);

        const ampm = hourInt >= 12 ? "PM" : "AM";
        hourInt = hourInt % 12 || 12;

        return `${hourInt}:${minute} ${ampm}`;
    };

    return convertToAMPM(dateTimeString);
}