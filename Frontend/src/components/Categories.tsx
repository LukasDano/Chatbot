import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

export function Categories() {
    const [categories, setCategories] = useState<string[] | null>(null);
    const [error, setError] = useState(false);
    const fallBackText = "Verbindung zum Server konnte nicht hergestellt werden";

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("http://localhost:8080/categories");

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();

                if (Array.isArray(data)) {
                    setCategories(data);
                } else {
                    throw new Error("Die Antwort des Servers ist kein Array.");
                }
            } catch (error) {
                console.error("Fehler beim Abrufen der Daten:", error);
                setError(true);
            }
        }

        fetchData();
    }, []);

    if (error) {
        return <p>{fallBackText}</p>;
    }

    if (!categories) {
        return <Spinner animation="border" />;
    }

    const formatCategoryName = (name: string) => {
        if (!name) return name;
        return name.charAt(0).toUpperCase() + name.slice(1);
    };

    return (
        <div id={"categories"}>
            <h1>Kategorien</h1>
            <ul>
                {categories.map((category) => (
                    <li key={category}>{formatCategoryName(category)}</li>
                ))}
            </ul>
        </div>
    );
}
