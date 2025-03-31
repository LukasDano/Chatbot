import { useEffect } from "react";
import { SendButton } from "./buttons.jsx";
import Form from 'react-bootstrap/Form';
import {Col, Row} from "react-bootstrap";

export function InputField({ sendInput }) {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                sendInput();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        // Entferne den Event Listener beim Verlassen des Components
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [sendInput]); // Der Hook wird nur erneut ausgeführt, wenn sich sendInput ändert

    return (
        <div>
            <Row className="d-flex align-items-center">
                <Col xs={10}>
                    <Form.Control id="chatInput" type="text" placeholder="Deine Eingabe" autoComplete={"off"} />
                </Col>
                <Col xs={2}>
                    <SendButton onClick={sendInput} />
                </Col>
            </Row>
        </div>
    );
}
