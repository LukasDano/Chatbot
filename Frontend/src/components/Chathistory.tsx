import React from "react";
import {ChatHistoryProps, TextFieldProps} from "../typescript/interfaces.ts";
import {chatHistory, historyStyle} from "../typescript/constants.ts";

export const ChatHistory: React.FC<ChatHistoryProps> = ({ history }) => {
    return (
        <div id="chatHistory" style={{ display: "none" }}>
            <div style={chatHistory}>
            {history.map((entry, index) => (
                entry.type === "input" ? (
                    <InputFieldForHistory key={index} text={entry.content} />
                ) : (
                    <OutputFieldForHistory key={index} text={`Antwort: ${entry.content}`} />
                )
            ))}
            </div>
        </div>
    );
};

export const InputFieldForHistory: React.FC<TextFieldProps> = ({ text }) => {
    return <div style={historyStyle}><div style={{backgroundColor: "#ccc"}}>{text}</div></div>;
};

export const OutputFieldForHistory: React.FC<TextFieldProps> = ({ text }) => {
    return <div style={historyStyle}>{text}</div>;
};
