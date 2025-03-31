import {Button, Col, Row} from "react-bootstrap";
import {sendAICall, sendExampleData} from "../api/sendData.js";

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

export const SendToAI = ({onClick}) => {
    return (
        <Button variant="dark" onClick={(data) => onClick(data)}>
            <img className={"invertedIcon"} src={"pictures/ai.png"} alt="AI"/>
        </Button>
    );
};

export const ButtonCollection = () => {
    return <Row className="w-100 mb-3 align-items-center">
        <Col xs="auto">
            <ReloadButton onClick={() => window.location.reload()} />
        </Col>
        <Col xs="auto">
            <SendButton onClick={() => sendExampleData()} />
        </Col>
        <Col xs="auto">
            <SendToAI onClick={() => sendAICall()} />
        </Col>
    </Row>
};