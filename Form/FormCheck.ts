import Input from "../Input/Input";
import FormContext from "./FormContext";

export default class FormCheck extends FormContext {
    inputs: {[inputName: string]: any};

    constructor() {
        super();
        this.inputs = {};
    }

    check(formData: {[name: string]: any}): {[key: string]: string} {
        const badInputs = {};
        for (const [name, input] of Object.entries(this.inputs)) {
            const [passed, errorMessages] = input.checkInput(formData[name]);
            if (!passed)
                badInputs[name] = errorMessages;
        }
        return badInputs;
    }
}