import Input from "../Input/Input";
import FormContext from "./FormContext";

export default class FormCheck extends FormContext {
    inputs: {[inputName: string]: any};

    constructor() {
        super();
        this.inputs = {};
    }

    async check(formData: {[name: string]: any}): Promise<{[key: string]: string}> {
        const badInputs = {};
        for (const [name, input] of Object.entries(this.inputs)) {
            const [passed, errorMessages] = await input.checkInput(formData[name]);
            if (!passed)
                badInputs[name] = errorMessages;
        }
        return badInputs;
    }
}