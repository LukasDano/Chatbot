import React, { useEffect } from "react";
import Form from 'react-bootstrap/Form';
import { Col, Row } from "react-bootstrap";
import {InputFieldProps} from "../typescript/interfaces.ts";
import {SendButton} from "./buttons.tsx";

export const InputField: React.FC<InputFieldProps> = ({ sendInput }) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Enter") {
                e.preventDefault();
                sendInput();
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
                <Col xs={10}>
                    <Form.Control id="chatInput" type="text" placeholder="Deine Eingabe" autoComplete="off" />
                </Col>
                <Col xs={2}>
                    <SendButton onClick={sendInput} />
                </Col>
            </Row>
        </div>
    );
};