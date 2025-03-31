export const backendBasePath = "http://localhost:8080";

export const stringInput = backendBasePath + "/input/string?text=";
export const dataInput = backendBasePath + "/input/json?data=";
export const aiInput = backendBasePath + "/input/ai?data=";

//Styles
export const inputHistoryStyle = {
    backgroundColor: "#ccc",
    marginBottom: "10px",
    justifyContent: "right",
    padding: "5px",
    display: "flex",
    flexDirection: "row-reverse",
    wordWrap: "break-word",
    whiteSpace: "normal",
    maxWidth: "calc(100ch)",
    overflowWrap: "break-word",
};

export const outputHistoryStyle = {
    marginBottom: "10px",
    justifyContent: "left",
    padding: "5px",
    display: "flex",
    flexDirection: "row",
    wordWrap: "break-word",
    whiteSpace: "normal",
    maxWidth: "calc(100ch)",
    overflowWrap: "break-word",

};
