import React from "react";

export const backendBasePath = "http://localhost:8080";
export const stringInput = backendBasePath + "/input/string?text=";
export const backendDataInput = backendBasePath + "/input/ai?data=";

export const modells = ["manuell", "llama3.2"];


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