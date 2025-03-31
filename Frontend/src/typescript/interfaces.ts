export interface IconButtonProps {
    onClick: (data: any) => any
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
}