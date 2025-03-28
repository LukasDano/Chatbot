const outputFieldID = "chatOutput";

export const setOutPut = (output) => {
    document.getElementById(outputFieldID).value = output;
};

export function OutputField() {
    return(
        <>
            <label htmlFor={outputFieldID}>Output</label>
            <input id={outputFieldID}></input>
            <p/>
        </>
    );
}