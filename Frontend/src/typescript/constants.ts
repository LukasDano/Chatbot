import React from "react";

export const backendBasePath = "http://localhost:8080";
export const categories = backendBasePath + "/categories";
export const stringInput = backendBasePath + "/input/string?data=";
export const backendDataInput = backendBasePath + "/input/ai?data=";

export const modelNames = {
    manuell: "manuell",
    llama3: "llama3.2",
};

export const modelList = [modelNames.manuell, modelNames.llama3];

//Styles
export const historyStyle: React.CSSProperties = {
    marginBottom: "10px",
    justifyContent: "flex-end",
    padding: "5px",
    display: "flex",
    flexDirection: "row-reverse",
    wordWrap: "break-word",
    whiteSpace: "normal",
    maxWidth: "100ch",
    overflowWrap: "break-word",
};

export const navbarStyle: React.CSSProperties = {
    width: "95%",
    margin: "0 auto",
    backgroundColor: "#fff",
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

export const chatSectionStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    gap: "1rem",
};

export const chatHistory: React.CSSProperties = {
    overflowY: "auto",
    maxHeight: "800px",
    maxWidth: "1080px",
    overflowX: "hidden",
};

export const selectStyle: React.CSSProperties = {
    maxWidth: "200px"
};

export const navbarUtility: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "10px"
};

export const disabled: React.CSSProperties = {
    pointerEvents: "none",
    cursor: "default",
    opacity: 0.6,
};

export const disabledButton: React.CSSProperties = {
    pointerEvents: "none",
    cursor: "default",
};