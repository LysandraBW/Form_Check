import Condition from "../Condition/Condition";
import SimpleCondition from "../Condition/Composite/Condition";
import CompositeCondition from "../Condition/Composite/Condition";
import BooleanCondition from "../Condition/Boolean/Condition";
import { And } from "../Condition/Composite/Defined/Defined";
import { toList } from "../Grammar/Helper";
import { AND } from "../Grammar/Conjunction";

export default class Input {
    shortCircuit: boolean;
    condition: CompositeCondition;
    errorMessage: { context: string }

    constructor(context: string, shortCircuit: boolean, conditions?: Condition) {
        this.errorMessage = { context: context }
        this.shortCircuit = shortCircuit;
        if (conditions)
            this.setCondition(conditions);
    }

    setCondition(condition: Condition) {
        if (condition instanceof CompositeCondition)
            this.condition = condition;
        else
            this.condition = And([condition]);
    }

    setBooleanCondition(boolExp: string, conditions: {[key: string]: Condition}) {
        const condition = BooleanCondition(boolExp, conditions);
        if (condition instanceof CompositeCondition)
            this.condition = condition as CompositeCondition;
        else
            this.condition = And([condition]);
    }

    checkInput(value: string): [passed: boolean, errorMessage: string] {
        const [passed, errorMessage] = this.#checkConditions(this.condition, value);
        if (passed) {
            return [true, ""];
        }
        return [false, `${this.errorMessage.context} ${errorMessage[1]}.`];
    }

    #checkConditions(condition: Condition, value: string): [passed: boolean, errorMessage: Array<string>] {
        if (condition instanceof SimpleCondition) {
            if (condition.test(value))
                return [true, []];
            return [false, [condition.errorMessage.command, condition.errorMessage.term]];
        }
        else if (condition instanceof CompositeCondition) {
            const conditions = new Array(condition.conditions.length).fill(false);
            const conditionsFailed: Array<Array<string>> = [];

            for (let i = 0; i < condition.conditions.length; i++) {
                const [passed, errorMessage] = this.#checkConditions(condition.conditions[i], value);
                if (passed)
                    conditions[i] = true;
                else
                    conditionsFailed.push(errorMessage);

                if (this.shortCircuit && !condition.test(conditions))
                    break;
            }

            if (condition.test(conditions))
                return [true, []];
            return [false, ["", toList(conditionsFailed.map(c => `${c[0]} ${c[1]}`), AND)]];
        }
        throw new Error("Undefined Condition");
    }
}