import { useEffect, useState } from "react";

function App() {
    const [textFromBackend, setTextFromBackend] = useState("Lädt...");

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("http://localhost:8080/hello");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.text();
                setTextFromBackend(data);
            } catch (error) {
                console.error("Fehler beim Abrufen der Daten:", error);
                setTextFromBackend("Fehler beim Laden der Daten");
            }
        }
        fetchData();
    }, []);

    return <h1>{textFromBackend}</h1>;
}

export default App;
