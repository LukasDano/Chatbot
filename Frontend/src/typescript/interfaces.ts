import {CSSProperties} from "react";

export interface IconButtonProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClick: (data: any) => any;
    title?: string;
}

export interface TextFieldProps {
    text: string;
}

export interface ChatEntry {
    type: "input" | "output";
    content: string;
}

export interface ChatHistoryProps {
    history: ChatEntry[];
}

export interface TextFieldProps {
    text: string;
}

export interface InputFieldProps {
    sendInput: () => void;
    style?: CSSProperties;
}

export interface TextButtonProps {
    displayText: string;
    style: CSSProperties;
}

export interface TicketInputFormProps {
    source?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    initialData?: Record<string, any> | null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClickSave: (data: any) => void;
}