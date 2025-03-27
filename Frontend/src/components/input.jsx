import {Button} from "react-bootstrap";

const inputFieldID = "chatInput";
const outputFieldID = "chatOutput";
const backendBasePath = "http://localhost:8080";

let output;

const setOutPut = () => {
    document.getElementById(outputFieldID).value = output;
};

const getResult = async () => {

    const inputValue = document.getElementById(inputFieldID).value;

    try {
        const response = await fetch(backendBasePath + "/input/basic?data=" + inputValue);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        output = await response.text();
    } catch (error) {
        console.error("Fehler beim Abrufen der Daten:", error);
        output = "Fehler bei der Übermittlung!"
    }

    setOutPut();
}


export function InputField() {
    return(
        <>
        <label htmlFor={outputFieldID}>Output</label>
        <input id={outputFieldID}></input>
        <p/>
        <label htmlFor={inputFieldID}>Input</label>
        <input id={inputFieldID}/>
        <Button variant={"dark"} onClick={() => getResult()}>Enter</Button>
        <p/>
        </>
    );
}