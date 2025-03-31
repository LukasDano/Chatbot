import {useEffect, useState} from "react";
import {Spinner} from "react-bootstrap";

export function Headline() {
    const [textFromBackend, setTextFromBackend] = useState(<Spinner/>);
    const fallBackText = "Verbindung zum Server konnte nicht hergestellt werden"

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("http://localhost:8080/headline");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.text();
                setTextFromBackend(data);
            } catch (error) {
                console.error("Fehler beim Abrufen der Daten:", error);
                setTextFromBackend(fallBackText);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <h1>{textFromBackend}</h1>
        </>
    );
}