import { useState } from "react";
import { InputField } from "./Input.tsx";
import { Headline } from "./Headline.tsx";
import { InfoButton, ReloadButton, TextButton } from "./Buttons.tsx";
import { Categories } from "./Categories.tsx";
import { ChatHistory } from "./Chathistory.tsx";
import { ChatEntry } from "../typescript/interfaces.ts";
import { Navbar, Form} from "react-bootstrap";
import {
    chatSectionStyle,
    containerStyle, disabledButton,
    modelList, modelNames,
    navbarStyle,
    navbarUtility,
    selectStyle
} from "../typescript/constants.ts";
import { sendDataToBackend } from "../api/sendData.ts";
import {capitalizeFirstLetter, createBackendBody} from "../utility/formatData.ts";

function App() {
    const [history, setHistory] = useState<ChatEntry[]>([]);
    const [category, setCategory] = useState<string | null>(null);

    const sendInput = async () => {
        const inputElement = document.getElementById("chatInput") as HTMLInputElement;
        const modell = (document.getElementById("modellSelect") as HTMLSelectElement | null)?.value || "";
        const categoryElement = document.getElementById("categories");

        if (categoryElement) {
            categoryElement.style.display = "none";
        }

        if (!inputElement) return;
        const input = inputElement.value;
        const currentHistory = [...history];

        if (input !== "") {
            const backendBody = createBackendBody(input, modell, currentHistory, category);
            let output = await sendDataToBackend(backendBody);

            if (modell === modelNames.manuell) {
                const result = JSON.parse(output);
                output = result.response;
                const formatedCategoryName = capitalizeFirstLetter(result.category);
                setCategory(formatedCategoryName);
            }

            if (modell === modelNames.llama3) {
                const result = JSON.parse(output);
                output = result.response;
            }

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

    return (
        <>
            <Navbar className="justify-content-between" style={navbarStyle}>
                <Headline />

                <div style={navbarUtility}>
                    {category && (
                        <TextButton displayText={category} style={disabledButton} />
                    )}

                    <Form.Select id="modellSelect" style={selectStyle}>
                        {modelList.map((modell) => (
                            <option key={modell} value={modell}>
                                {modell}
                            </option>
                        ))}
                    </Form.Select>

                    <InfoButton onClick={() => window.location.reload()} title={"Zeige alle Kategorien an"}/>
                    <ReloadButton onClick={() => window.location.reload()} />
                </div>
            </Navbar>

            <div style={containerStyle}>
                <div style={chatSectionStyle}>
                    <Categories/>
                    <ChatHistory history={history}/>
                    <InputField sendInput={sendInput} />
                </div>
            </div>
        </>
    );
}

export default App;
