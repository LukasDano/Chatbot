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

export const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
    gap: "2rem",
};

export const rowStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
};

export const chatSectionStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    gap: "1rem",
};
