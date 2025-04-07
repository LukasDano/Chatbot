import {Button} from "react-bootstrap";
import {IconButtonProps} from "../typescript/interfaces.ts";
import React from "react";

export const ReloadButton: React.FC<IconButtonProps> = ({onClick}) => {
    return (
        <Button variant="info" onClick={(data) => onClick(data)}>
            <img className={"invertedIcon"} src={"pictures/reload.png"} alt="Reload"/>
        </Button>
    );
};

export const SendButton: React.FC<IconButtonProps> = ({onClick}) => {
    return (
        <Button variant="primary" onClick={(data) => onClick(data)}>
            <img className={"invertedIcon"} src={"pictures/send.png"} alt="Send"/>
        </Button>
    );
};

export const InfoButton: React.FC<IconButtonProps> = ({onClick}) => {
    return (
        <Button variant="info" onClick={(data) => onClick(data)}>
            <img className={"invertedIcon"} src={"pictures/info.png"} alt="Info"/>
        </Button>
    );
};

export const SendToAIButton: React.FC<IconButtonProps> = ({onClick}) => {
    return (
        <Button variant="dark" onClick={(data) => onClick(data)}>
            <img className={"invertedIcon"} src={"pictures/ai.png"} alt="AI"/>
        </Button>
    );
};
