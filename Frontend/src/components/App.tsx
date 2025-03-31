import { useState } from "react";
import { InputField } from "./input";
import { Headline } from "./headline";
import { sendString } from "../api/sendString";
import { ChatHistory } from "./chatHistory";
import { ButtonCollection } from "./buttons";
import {ChatEntry} from "../typescript/interfaces.ts";



function App() {
    const [history, setHistory] = useState<ChatEntry[]>([]);

    const sendInput = async () => {
        const inputElement = document.getElementById("chatInput") as HTMLInputElement;
        if (!inputElement) return;
        const input = inputElement.value;

        if (input !== "") {
            const output = await sendString(input);
            setHistory((prevHistory) => [
                ...prevHistory,
                { type: "input", content: input },
                { type: "output", content: output }
            ]);

            const chatHistoryElement = document.getElementById("chatHistory");
            if (chatHistoryElement) {
                chatHistoryElement.style.display = "block";
            }
            // inputElement.value = "";
        }
    };

    return (
        <div>
            <Headline />
            <ChatHistory history={history} />
            <InputField sendInput={sendInput} />
            <p />
            <ButtonCollection />
        </div>
    );
}

export default App;