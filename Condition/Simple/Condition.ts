import Condition from "../Condition";

export default class SimpleCondition extends Condition {
    errorMessage: {[key: string]: string} = {
        command: "",
        term: ""
    }

    constructor(test: (...args: any[]) => boolean, command: string, term: string) {
        super(test);
        
        this.errorMessage = {
            command: command,
            term: term
        }
    }
}