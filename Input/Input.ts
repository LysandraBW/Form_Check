import Condition from "../Condition/Condition";
import SimpleCondition from "../Condition/Composite/Condition";
import CompositeCondition from "../Condition/Composite/Condition";
import BooleanCondition from "../Condition/Boolean/Condition";
import { And } from "../Condition/Composite/Defined/Defined";
import ErrorMessage from "../Error/ErrorMessage";
import { toList } from "../Grammar/Construction";

export default class Input extends ErrorMessage {
    shortCircuit: boolean;
    condition: CompositeCondition;

    constructor(shortCircuit: boolean, condition: Condition) {
        super();
        this.shortCircuit = shortCircuit;
        this.setCondition(condition);
    }

    setCondition(condition: Condition) {
        this.condition = 
            (condition instanceof CompositeCondition) ? condition : And([condition]);
    }

    setBooleanCondition(exp: string, conditions: {[key: string]: Condition}) {
        const condition = BooleanCondition(exp, conditions);
        this.setCondition(condition);
    }

    checkInput(value: string): [passed: boolean, errorMessage: string] {
        const [passed, errMsg] = this.checkCondition(this.condition, value);
        if (passed)
            return [true, ""];
        return [false, `${this.getContext()} ${errMsg[1]}.`];
    }

    checkCondition(condition: Condition, value: string): [passed: boolean, errMsg: Array<string>] {
        if (condition instanceof SimpleCondition)
            return this.checkSimpleCondition(condition, value);
        return this.checkCompositeCondition(condition as CompositeCondition, value);
    }

    checkSimpleCondition(condition: SimpleCondition, value: string): [passed: boolean, errMsg: Array<string>] {
        if (condition.test(value))
            return [true, []];
        return [false, [condition.getCommand(), condition.getTerm()]];
    }

    checkCompositeCondition(condition: CompositeCondition, value: string): [passed: boolean, errMsg: Array<string>]{
        const size = condition.conditions.length;
        const conditions = new Array(size).fill(false);
        const errMsgs: Array<Array<string>> = [];

        for (let i = 0; i < size; i++) {
            const [passed, errMsg] = this.checkCondition(condition.conditions[i], value);
            if (passed) 
                conditions[i] = true;
            else 
                errMsgs.push(errMsg);

            if (this.shortCircuit && !condition.test(conditions)) 
                break;
        }

        if (condition.test(conditions))
            return [true, []];
        return [false, ["", toList(errMsgs.map(c => `${c[0]} ${c[1]}`), condition.getConjunction())]];
    }
}