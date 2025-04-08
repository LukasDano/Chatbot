import {backendBasePath} from "../typescript/constants.ts";

export const validatePrioValueType = async (value: string) => {

    const validationPath = backendBasePath + "/input/servicePrioValidation?data=";
    const response = await fetch(validationPath + value);
    const valid = await response.text();

    if (valid === "true") {
        return true;
    }

    return false;
};
