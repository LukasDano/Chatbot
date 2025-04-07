import {backendDataInput} from "../typescript/constants.ts"
import {BackendBody} from "../typescript/types.ts";

export async function sendDataToBackend(data: BackendBody) {
    let result = "";

    const sendReadyData = JSON.stringify(data);

    try {
        const response = await fetch(backendDataInput, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: sendReadyData
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        result = await response.text();
    } catch (error) {
        console.error("Fehler beim Abrufen der Daten:", error);
    }

    return result;
}
