import Condition from "../../Condition";
import CompositeCondition from "../Condition";
import { and, or, xor, nand } from "../Bools/Bools";
import * as Conjunction from "../../../Grammar/Conjunction";

export function And(conditions: Array<Condition>) {
    return new CompositeCondition(and, conditions, Conjunction.AND);
}

export function Or(conditions: Array<Condition>) {
    return new CompositeCondition(or, conditions, Conjunction.OR);
}

export function Xor(conditions: Array<Condition>) {
    return new CompositeCondition(xor, conditions, Conjunction.OR);
}

export function Nand(conditions: Array<Condition>) {
    return new CompositeCondition(nand, conditions, Conjunction.OR);
}