import Condition from "../Condition";

export default class CompositeCondition extends Condition {
    conditions: Array<Condition>;
    errorMessage: {[key: string]: string} = { conjunction: "" }

    constructor(test: (bools: Array<boolean>) => boolean, conditions: Array<Condition>, conjunction: string) {
        super(test);

        this.conditions = conditions;
        this.errorMessage = { conjunction: conjunction }
    }
}