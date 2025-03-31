import { inputHistoryStyle, outputHistoryStyle } from "../constants.ts";

export const ChatHistory = ({ history }) => {
    return (
        <div id="chatHistory" style={{display: "none"}}>
            {history.map((entry, index) => {
                return entry.type === "input" ? (
                    <InputFieldForHistory key={index} input={entry.content} />
                ) : (
                    <OutputFieldForHistory key={index} output={`Antwort: ${entry.content}`} />
                );
            })}
        </div>
    );
};

export const InputFieldForHistory = ({ input }) => {
    return <div style={inputHistoryStyle}>{input}</div>;
};

export const OutputFieldForHistory = ({ output }) => {
    return <div style={outputHistoryStyle}>{output}</div>;
};
