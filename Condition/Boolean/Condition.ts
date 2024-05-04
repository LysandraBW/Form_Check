import Condition from "../Condition";
import { peek, parseCondition, parseConditionName, Parts } from "./Helper";

export default function BooleanCondition(exp: string, conditions: {[key: string]: Condition}): Condition {
    const boolExp = "(" + exp.replace(/\s/g, "") + ")";
    let i = 0;

    const match = (str: string): boolean => {
        if (peek(str, boolExp, i)) {
            i += str.length;
            return true;
        }
        return false;
    }

    const stack: Array<Parts> = [];
    stack.push({operator: "&&", conditions: []});

    while (i < boolExp.length) {
        if (match("(")) {
            stack.push({operator: "", conditions: []});
        }
        else if (match(")")) {
            const currCondition = stack.pop();
            if (!currCondition)
                throw new Error("No Current Condition");
            stack[stack.length - 1].conditions.push(parseCondition(currCondition));
        }
        else if (match("&&")) {
            stack[stack.length - 1].operator = "&&";
        }
        else if (match("||")) {
            stack[stack.length - 1].operator = "||";
        }
        else {
            const name = parseConditionName(boolExp, i);
            if (!conditions.hasOwnProperty(name))
                throw new Error("Missing Condition");
            i += name.length;
            stack[stack.length - 1].conditions.push(conditions[name]);
        }
    }

    if (!stack || !stack[0] || !stack[0].conditions[0])
        throw new Error("No Condition");

    return stack[0].conditions[0];
}