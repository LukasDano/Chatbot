import {TicketContent} from "../typescript/types.ts";
import {backendBasePath} from "../typescript/constants.ts";

export const saveTicketDataInDatabase = async (data: TicketContent) => {

    let result = "";
    const dataBasePost = backendBasePath + "/input/database?data="

    const sendReadyData = JSON.stringify(data);

    try {
        const response = await fetch(dataBasePost, {
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
    window.location.reload();
    return result;
}
