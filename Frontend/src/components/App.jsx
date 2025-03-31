import { useState } from "react";
import { InputField } from "./input.jsx";
import { Headline } from "./headline.jsx";
import { sendString } from "../api/sendString.js";
import { ChatHistory } from "./chatHistory.jsx";
import {ButtonCollection} from "./buttons.jsx";

function App() {
    const [history, setHistory] = useState([]);

    const sendInput = async () => {
        const input = document.getElementById("chatInput").value;

        if (input !== "") {
            const output = await sendString(input);

            setHistory((prevHistory) => [
                ...prevHistory,
                { type: "input", content: input },
                { type: "output", content: output }
            ]);

            document.getElementById("chatHistory").style.display = "block";
            // document.getElementById("chatInput").value = "";
        }
    };

    return (
        <div >
            <Headline/>
            <ChatHistory history={history}/>
            <InputField sendInput={sendInput} />
            <p/>
            <ButtonCollection/>
        </div>
    );
}

export default App;
