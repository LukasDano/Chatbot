import {ChatEntry} from "./interfaces.ts";

export type ChatEntries = ChatEntry[];

export type ChatHistory = ChatHistoryEntry[];
export type ChatHistoryEntry = {role: string, content: string};

export type BackendBody = {
    content: string;
    modell: string;
    category: string;
    chatHistory: ChatHistory;
};