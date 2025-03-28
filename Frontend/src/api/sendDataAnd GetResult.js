import {stringInput} from "../constants.js"

export const getResult = async (inputFieldID) => {

    const inputValue = document.getElementById(inputFieldID).value;

    try {
        const response = await fetch(stringInput + inputValue);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.text();
    } catch (error) {
        console.error("Fehler beim Abrufen der Daten:", error);
        return "Fehler bei der Übermittlung!"
    }
}