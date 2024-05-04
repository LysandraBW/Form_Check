import Condition from "../Condition";

export default class CompositeCondition extends Condition {
    conditions: Array<Condition>;

    constructor(test: (bools: Array<boolean>) => boolean, conditions: Array<Condition>, conjunction?: string) {
        super(test);
        this.conditions = conditions;
        this.setConjunction(conjunction || "");
    }
}