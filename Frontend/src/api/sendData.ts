import {ollamaGernerateInput, dataInput, ollamaChatInput} from "../typescript/constants.ts"
import {ChatEntries} from "../typescript/types.ts";
import {formatChatEntriesToChatHistory} from "../utility/formatData.ts";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sendJSONData = async (jsonData: any) => {
    let result = "Fehler bei der Übermittlung!";
    const sendReadyData = JSON.stringify(jsonData);

    try {
        const response = await fetch(dataInput, {
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

export async function sendStringWithJSON(content: string) {
    let result = "";

    const data = {
        "content": content,
    };

    const sendReadyData = JSON.stringify(data);

    try {
        const response = await fetch(ollamaGernerateInput, {
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

export async function sendChatToOllama(content: string, chatHistory: ChatEntries) {
    let result = "";

    const data = {
        "content": content,
        "chatHistory": formatChatEntriesToChatHistory(chatHistory)
    };

    const sendReadyData = JSON.stringify(data);

    try {
        const response = await fetch(ollamaChatInput, {
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
