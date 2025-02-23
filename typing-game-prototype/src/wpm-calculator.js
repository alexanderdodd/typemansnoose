const AVERAGE_WPM = 4.7;

export function calculateWPM(countdownSeconds, chars) {
    const minutes = countdownSeconds/60;
    const words = chars/AVERAGE_WPM;
    return Math.ceil(words / minutes);
}