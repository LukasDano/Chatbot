import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { TicketInputFormProps } from "../typescript/interfaces.ts";
import { backendBasePath } from "../typescript/constants.ts";
import {capitalizeFirstLetter} from "../utility/formatData.ts";

export const TicketForm: React.FC<TicketInputFormProps> = ({ initialData, onClickSave }) => {
    const defaultValues = {
        serviceCategory: initialData?.category.toLowerCase() || "",
        firstOccurrence: initialData?.firstOccurrence || "",
        servicePriority: initialData?.priority.toLowerCase() || "",
        othersWithTheSameProblem: initialData?.othersWithTheSameProblem || "",
    };

    const [formData, setFormData] = useState(defaultValues);
    const [serviceCategories, setServiceCategories] = useState<string[]>([]);
    const [servicePriorities, setServicePriorities] = useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoriesResponse = await fetch(backendBasePath + "/categories");
                const categories = await categoriesResponse.json();
                setServiceCategories(categories);

                const prioritiesResponse = await fetch(backendBasePath + "/priorities");
                const priorities = await prioritiesResponse.json();
                setServicePriorities(priorities);
            } catch (error) {
                console.error("Fehler beim Laden der Daten:", error);
            }
        };

        fetchData();
    }, []);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange: React.ChangeEventHandler<any> = (e) => {
        const target = e.target as HTMLInputElement | HTMLSelectElement;
        const { name, value, type } = target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "number" ? Number(value) : value,
        }));
    };


    const handleSave = () => {
        onClickSave(formData);
    };

    return (
        <Form>
            <div>
                <Form.Label htmlFor="serviceCategory">Kategorie</Form.Label>
                <Form.Select
                    id="serviceCategory"
                    name="serviceCategory"
                    value={formData.serviceCategory}
                    onChange={handleChange}
                >
                {serviceCategories.map((category) => (
                    <option key={category} value={category}>
                        {capitalizeFirstLetter(category)}
                    </option>
                ))}
                </Form.Select>
            </div>

            <br />

            <div>
                <Form.Label htmlFor="firstOccurrence">Wann ist das Problem zum ersten mal aufgetreten?</Form.Label>
                <Form.Control
                    type="text"
                    id="firstOccurrence"
                    name="firstOccurrence"
                    value={formData.firstOccurrence}
                    onChange={handleChange}
                    placeholder="..."
                />
            </div>

            <br />

            <div>
                <Form.Label htmlFor="servicePriority">Priorität</Form.Label>
                <Form.Select
                    id="servicePriority"
                    name="servicePriority"
                    value={formData.servicePriority}
                    onChange={handleChange}
                >
                {servicePriorities.map((priority) => (
                    <option key={priority} value={priority}>
                        {capitalizeFirstLetter(priority)}
                    </option>
                ))}
                </Form.Select>
            </div>

            <br />

            <div>
                <Form.Label htmlFor="othersWithTheSameProblem">Haben andere das selbe Problem?</Form.Label>
                <Form.Control
                    type="text"
                    id="othersWithTheSameProblem"
                    name="othersWithTheSameProblem"
                    value={formData.othersWithTheSameProblem}
                    onChange={handleChange}
                    placeholder="..."
                />
            </div>

            <br />
            <div style={{display: "flex", justifyContent: "center"}}>
                <Button onClick={handleSave}>Ticket verbindlich erstellen</Button>
            </div>
        </Form>
    );
};
