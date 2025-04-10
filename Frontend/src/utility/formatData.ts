import {BackendBody, ChatEntries, ChatHistory, TicketContent} from "../typescript/types.ts";

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

export const createBackendBody = (
    content: string,
    modell: string,
    chatHistory: ChatEntries,
    category?: string | null,
    firstOccurrence?: string | null,
    priority?: string | null,
    othersWithTheSameProblem?: string | null): BackendBody => {

    const sendReadyCategory: string = category || "";
    const sendReadyFirstOccurrence: string = firstOccurrence || "";
    const sendReadyPriority: string = priority || "";
    const sendReadyOthersWithTheSameProblem: string = othersWithTheSameProblem || "";

    return {
        "content": content,
        "modell": modell,
        "category": sendReadyCategory,
        "firstOccurrence": sendReadyFirstOccurrence,
        "priority": sendReadyPriority,
        "othersWithTheSameProblem": sendReadyOthersWithTheSameProblem,
        "chatHistory": formatChatEntriesToChatHistory(chatHistory)
    };
};

export const createTicketData = (
    category: string | null,
    firstOccurrence: string | null,
    priority: string | null,
    othersWithTheSameProblem: string | null): TicketContent => {

    const sendReadyCategory: string = category || "";
    const sendReadyFirstOccurrence: string = firstOccurrence || "";
    const sendReadyPriority: string = priority || "";
    const sendReadyOthersWithTheSameProblem: string = othersWithTheSameProblem || "";

    return {
        "category": sendReadyCategory,
        "firstOccurrence": sendReadyFirstOccurrence,
        "priority": sendReadyPriority,
        "othersWithTheSameProblem": sendReadyOthersWithTheSameProblem,
    };
};
