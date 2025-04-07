import {backendDataInput} from "../typescript/constants.ts"
import {ChatEntries} from "../typescript/types.ts";
import {formatChatEntriesToChatHistory} from "../utility/formatData.ts";

export async function sendChatToOllama(content: string, modell: string, chatHistory: ChatEntries) {
    let result = "";

    const data = {
        "content": content,
        "modell": modell,
        "chatHistory": formatChatEntriesToChatHistory(chatHistory)
    };

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
