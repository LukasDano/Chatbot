import {Button} from "react-bootstrap";

export const ReloadButton = ({onClick}) => {
    return (
        <Button variant="info" onClick={(data) => onClick(data)}>
            <img className={"invertedIcon"} src={"pictures/reload.png"} alt="Reload"/>
        </Button>
    );
};

export const SendButton = ({onClick}) => {
    return (
        <Button variant="primary" onClick={(data) => onClick(data)}>
            <img className={"invertedIcon"} src={"pictures/send.png"} alt="Send"/>
        </Button>
    );
};
