import Condition from "../Condition";

export default class SimpleCondition extends Condition {
    constructor(test: (...args: any[]) => boolean | Promise<boolean>, command?: string, term?: string) {
        super(test);
        this.setCommand(command || "");
        this.setTerm(term || "");
    }
}