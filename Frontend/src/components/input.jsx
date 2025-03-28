import {SendButton} from "./buttons.jsx";
import {sendString} from "../api/sendString.js";
import {setOutPut} from "./output.jsx";

const inputFieldID = "chatInput";

const sendInput = async () => {
    const inputValue = document.getElementById(inputFieldID).value;

    const result = await sendString(inputValue);
    setOutPut(result);
};

export function InputField() {
    return(
        <>
        <label htmlFor={inputFieldID}>Input</label>
        <input id={inputFieldID}/>
        <SendButton onClick={() => sendInput()}/>
        <p/>
        </>
    );
}