import {BackendBody} from "./types.ts";
import {validatePrioValueType} from "../api/validateFromBackend.ts";

export const validateBackendBodyValues = async (data: BackendBody) => {
    const prioIsValid = await validatePrioValueType(data.priority);

    if (data.priority === "") {
        return true;
    }

    return prioIsValid;
};

export const valueExistsAndHasValidValue = (text: string | null | undefined): boolean => {
    if (text === "" || text === null || text === undefined) {
        return false;
    }

    return true;
};