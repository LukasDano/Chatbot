import {BackendBody} from "./types.ts";
import {validatePrioValueType} from "../api/validateFromBackend.ts";

export const validateBackendBodyValues = async (data: BackendBody) => {
    const prioIsValid = await validatePrioValueType(data.priority);

    if (data.priority === "") {
        return true;
    }

    return prioIsValid;
};