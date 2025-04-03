import { useState } from "react";
import { InputField } from "./input";
import { Headline } from "./headline";
import { sendString } from "../api/sendString";
import { ChatHistory } from "./chatHistory";
import {ReloadButton} from "./buttons";
import {ChatEntry} from "../typescript/interfaces.ts";
import {Navbar} from "react-bootstrap";
import {chatSectionStyle, containerStyle} from "../typescript/constants.ts";
import {sendStringWithJSON} from "../api/sendData.ts";

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
            inputElement.value = "";
        }
    };

    const sendInputToAI = async () => {
        const inputElement = document.getElementById("chatInput") as HTMLInputElement;
        if (!inputElement) return;
        const input = inputElement.value;

        if (input !== "") {
            const output = await sendStringWithJSON(input);

            if (output !== "") {
                setHistory((prevHistory) => [
                    ...prevHistory,
                    { type: "input", content: input },
                    { type: "output", content: output }
                ]);

                const chatHistoryElement = document.getElementById("chatHistory");
                if (chatHistoryElement) {
                    chatHistoryElement.style.display = "block";
                }
                inputElement.value = "";
            }
        }
    };

    return (
        <>
        <Navbar>
            <Headline/>
            <ReloadButton onClick={() => window.location.reload()} />
        </Navbar>
        <div style={containerStyle}>
            <div style={chatSectionStyle}>
                <ChatHistory history={history}/>
                <InputField sendInput={sendInput} sendToAi={sendInputToAI}/>
            </div>
        </div>
        </>
    );
}

export default App;