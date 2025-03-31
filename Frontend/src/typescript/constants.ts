import React from "react";

export const backendBasePath = "http://localhost:8080";

export const stringInput = backendBasePath + "/input/string?text=";
export const dataInput = backendBasePath + "/input/json?data=";
export const aiInput = backendBasePath + "/input/ai?data=";

//Styles
export const historyStyle: React.CSSProperties = {
    marginBottom: "10px",
    justifyContent: "flex-end", // Korrektur
    padding: "5px",
    display: "flex",
    flexDirection: "row-reverse", // Korrektur
    wordWrap: "break-word",
    whiteSpace: "normal",
    maxWidth: "100ch",
    overflowWrap: "break-word",
};
