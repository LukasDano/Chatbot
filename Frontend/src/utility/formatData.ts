import {ChatEntries, ChatHistory} from "../typescript/types.ts";

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
