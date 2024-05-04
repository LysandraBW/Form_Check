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

    async checkInput(value: string): Promise<[pass: boolean, errMsg: string]> {
        const [passed, errMsg] = await this.checkCondition(this.condition, value);
        if (passed)
            return [true, ""];
        return [false, `${this.getContext()} ${errMsg[1]}.`];
    }

    async checkCondition(condition: Condition, value: string): Promise<[pass: boolean, errMsg: Array<string>]> {
        if (condition instanceof SimpleCondition)
            return await this.checkSimpleCondition(condition, value);
        return await this.checkCompositeCondition(condition as CompositeCondition, value);
    }

    async checkSimpleCondition(condition: SimpleCondition, value: string): Promise<[pass: boolean, errMsg: Array<string>]> {
        if (await condition.test(value))
            return [true, []];
        return [false, [condition.getCommand(), condition.getTerm()]];
    }

    async checkCompositeCondition(condition: CompositeCondition, value: string): Promise<[pass: boolean, errMsg: Array<string>]> {
        const size = condition.conditions.length;
        const conditions = new Array(size).fill([false, []]);

        for (let i = 0; i < size; i++) {
            conditions[i] = await this.checkCondition(condition.conditions[i], value);
            if (this.shortCircuit && !condition.test(conditions.map(c => c[0]))) 
                break;
        }

        if (condition.test(conditions))
            return [true, []];
        return [false, ["", toList(conditions.filter(c => !c[0]).map(c => `${c[1][0]} ${c[1][1]}`), condition.getConjunction())]];
    }
}