export const minuteFormarter = (time: number): string => {
    
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    const minuteUnit = minutes > 1 ? " minutes" : " minute";
    const hourUnit = hours > 1 ? " hours" : " hour";
    return `${hours>0 ? hours+hourUnit: ""} ${minutes + minuteUnit}`;
    
}