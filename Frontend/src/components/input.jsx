import {SendButton} from "./buttons.jsx";
import {getResult} from "../api/sendDataAnd GetResult.js";
import {setOutPut} from "./output.jsx";

const inputFieldID = "chatInput";

const sendInput = async () => {
    const result = await getResult(inputFieldID);
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