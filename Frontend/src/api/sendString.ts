import {stringInput} from "../typescript/constants.ts"

export const sendString = async (inputValue: string) => {

    let result = "Fehler bei der Übermittlung!";

    try {
        const response = await fetch(stringInput + inputValue);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        result = await response.text();
    } catch (error) {
        console.error("Fehler beim Abrufen der Daten:", error);
    }

    return result;
}