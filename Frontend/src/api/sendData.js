import {dataInput} from "../constants.ts"

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


export function sendExampleData() {
    persons.forEach(person => sendJSONData(person));
}
