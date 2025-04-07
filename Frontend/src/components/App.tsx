import { useState } from "react";
import { InputField } from "./input";
import { Headline } from "./Headline.tsx";
import { sendString } from "../api/sendString";
import { ChatHistory } from "./chatHistory";
import { ReloadButton } from "./buttons";
import { ChatEntry } from "../typescript/interfaces.ts";
import { Navbar, Form } from "react-bootstrap";
import {
    chatSectionStyle,
    containerStyle,
    modells,
    navbarStyle,
    navbarUtility,
    selectStyle
} from "../typescript/constants.ts";
import { sendDataToBackend } from "../api/sendData.ts";
import {Categories} from "./Categories.tsx";

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

    const sendInputToChatAPI = async (modell: string) => {
        const inputElement = document.getElementById("chatInput") as HTMLInputElement;
        if (!inputElement) return;
        const input = inputElement.value;
        const currentHistory = [...history];

        if (input !== "") {
            const output = await sendDataToBackend(input, modell, currentHistory);

            if (output.trim() !== "") {
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

    const send = ()=> {
        const modell = (document.getElementById("modellSelect") as HTMLSelectElement | null)?.value || "";

        if (modell !== "") {
            const categoryElement = document.getElementById("categories");

            if (categoryElement) {
                categoryElement.style.display = "none";
            }
        }

        switch (modell) {
            case "manuell":
                sendInput();
                break;
            case "llama3.2":
                sendInputToChatAPI(modell);
                break;
        }
    };

    return (
        <>
            <Navbar className="justify-content-between" style={navbarStyle}>
                <Headline />

                <div style={navbarUtility}>
                    <Form.Select id="modellSelect" style={selectStyle}>
                        {modells.map((modell) => (
                            <option key={modell} value={modell}>
                                {modell}
                            </option>
                        ))}
                    </Form.Select>

                    <ReloadButton onClick={() => window.location.reload()} />
                </div>
            </Navbar>
        <div style={containerStyle}>
            <div style={chatSectionStyle}>
                <Categories/>
                <ChatHistory history={history}/>
                <InputField sendInput={send} />
            </div>
        </div>
        </>
    );
}

export default App;