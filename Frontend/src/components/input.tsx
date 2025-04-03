import React, { useEffect } from "react";
import {SendButton, SendToAIButton} from "./buttons";
import Form from 'react-bootstrap/Form';
import { Col, Row } from "react-bootstrap";
import {InputFieldProps} from "../typescript/interfaces.ts";

export const InputField: React.FC<InputFieldProps> = ({ sendInput, sendToAi }) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Enter") {
                e.preventDefault();
                sendToAi();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [sendInput]);

    return (
        <div>
            <Row className="d-flex align-items-center">
                <Col xs={8}>
                    <Form.Control id="chatInput" type="text" placeholder="Deine Eingabe" autoComplete="off" />
                </Col>
                <Col xs={2}>
                    <SendToAIButton onClick={sendToAi} />
                </Col>
                <Col xs={2}>
                    <SendButton onClick={sendInput} />
                </Col>
            </Row>
        </div>
    );
};