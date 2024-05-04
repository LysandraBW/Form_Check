import Condition from "../Condition";
import { And, Or } from "../Composite/Defined/Defined";

export interface Parts {
    operator: string;
    conditions: Array<Condition>
}

export const peek = (pattern: string, string: string, i: number): boolean => {
    return string.substring(i, i + pattern.length) === string;
}

export const parseCondition = (parts: Parts): Condition => {
    switch (parts.operator) {
        case "":
            return parts.conditions[0];
        case "||":
            return Or(parts.conditions);
        default:
            return And(parts.conditions);
    }
}

export const parseConditionName = (string: string, i: number): string => {
    let name = "";

    while (i < string.length) {
        const ch = string[i++];

        if (ch !== "|" && ch !== "&" && ch !== "(" && ch !== ")")
            name += ch;
        else
            break;
    }

    return name;
}