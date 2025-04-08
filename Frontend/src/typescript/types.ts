import {ChatEntry} from "./interfaces.ts";

export type ChatEntries = ChatEntry[];

export type ChatHistory = ChatHistoryEntry[];
export type ChatHistoryEntry = {role: string, content: string};

export type Priority = "niedrig" | "mittel" | "hoch" | "kritisch";

export type BackendBody = {
    content: string;
    modell: string;
    category: string;
    firstOccurrence: string,
    priority: string,
    othersWithTheSameProblem: string,
    chatHistory: ChatHistory;
};