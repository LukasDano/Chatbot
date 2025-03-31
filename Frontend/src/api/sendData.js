import {aiInput, dataInput} from "../constants.ts"

const personOne =  {
    "name": "Mueller",
    "age": 11,
    "city": "Hamburg",
};

const personTwo =  {
    "name": "Schmidt",
    "age": 21,
    "city": "Berlin",
};

const persons = [personOne, personTwo];

export const sendJSONData = async (jsonData) => {
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

    console.log(result);
}

export async function sendAICall() {
    const response = await fetch("../../apiKeys.json");
    const apiKey = await response.json();
    const content = document.getElementById("chatInput").value;

    const data = {
        "content": content,
        "apiKey": apiKey.ChatGPT,
    };

    const sendReadyData = JSON.stringify(data);

    try {
        const response = await fetch(aiInput, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: sendReadyData
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

    } catch (error) {
        console.error("Fehler beim Abrufen der Daten:", error);
    }
}


export function sendExampleData() {
    persons.forEach(person => sendJSONData(person));
}
