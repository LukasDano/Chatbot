import {BackendBody, ChatEntries, ChatHistory} from "../typescript/types.ts";

export const formatChatEntriesToChatHistory = (chatEntries: ChatEntries) => {
    const chatHistory: ChatHistory = [];

    chatEntries.forEach((entry) => {
        const role = entry.type === "input" ? "user" :
            entry.type === "output" ? "assistant" : "unknown";

        chatHistory.push({
            role,
            content: entry.content,
        });
    });

    return chatHistory;
};

export const capitalizeFirstLetter = (name: string) => {
    if (!name) return name;
    return name.charAt(0).toUpperCase() + name.slice(1);
};

export const createBackendBody = (content: string, modell: string, chatHistory: ChatEntries, category?: string | null): BackendBody => {
    const sendReadyCategory: string = category || "";

    return {
        "content": content,
        "modell": modell,
        "category": sendReadyCategory,
        "chatHistory": formatChatEntriesToChatHistory(chatHistory)
    };
};