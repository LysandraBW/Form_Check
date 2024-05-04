import SimpleCondition from "../Condition";
import * as Test from "../Bools/Bools";

export function HasInput(command: string, term: string) {
    return new SimpleCondition(Test.hasInput, command, term);
}

export function HasInputs(command: string, term: string) {
    return new SimpleCondition(Test.hasInputs, command, term);
}

export function InputIn(options: Array<string>, command: string, term: string) {
    const test = (input: string) => Test.inputIn(input, options);
    return new SimpleCondition(test, command, term);
}

export function InputsIn(options: Array<string>, command: string, term: string) {
    const test = (input: Array<string>) => Test.inputsIn(input, options);
    return new SimpleCondition(test, command, term);
}

export function IsName(command: string, term: string) {
    return new SimpleCondition(Test.isName, command, term);
}

export function IsPhoneNumber(command: string, term: string) {
    return new SimpleCondition(Test.isPhoneNumber, command, term);
}

export function IsEmailAddress(command: string, term: string) {
    return new SimpleCondition(Test.isEmailAddress, command, term);
}

export function IsVIN(command: string, term: string) {
    return new SimpleCondition(Test.isVIN, command, term);
}

export function IsLicensePlate(command: string, term: string) {
    return new SimpleCondition(Test.isLicensePlate, command, term);
}

export function IsCardNumber(command: string, term: string) {
    return new SimpleCondition(Test.isCardNumber, command, term);
}

export function IsExpirationDate(command: string, term: string) {
    return new SimpleCondition(Test.isExpirationDate, command, term);
}

export function IsCVV(command: string, term: string) {
    return new SimpleCondition(Test.isCVV, command, term);
}

export function IsNumber(command: string, term: string) {
    return new SimpleCondition(Test.isNumber, command, term);
}

export function IsFloat(command: string, term: string) {
    return new SimpleCondition(Test.isFloat, command, term);
}

export function IsPrice(command: string, term: string) {
    return new SimpleCondition(Test.isPrice, command, term);
}

export function NoSymbols(command: string, term: string) {
    return new SimpleCondition(Test.noSymbols, command, term);
}

export function NoNumbers(command: string, term: string) {
    return new SimpleCondition(Test.noNumbers, command, term);
}

export function NoLetters(command: string, term: string) {
    return new SimpleCondition(Test.noLetters, command, term);
}

export function HaveSymbols(command: string, term: string) {
    return new SimpleCondition(Test.haveSymbols, command, term);
}

export function HaveNumbers(command: string, term: string) {
    return new SimpleCondition(Test.haveNumbers, command, term);
}

export function HaveLetters(command: string, term: string) {
    return new SimpleCondition(Test.haveLetters, command, term);
}

export function OnlySymbols(command: string, term: string) {
    return new SimpleCondition(Test.onlySymbols, command, term);
}

export function OnlyNumbers(command: string, term: string) {
    return new SimpleCondition(Test.onlyNumbers, command, term);
}

export function OnlyLetters(command: string, term: string) {
    return new SimpleCondition(Test.onlyLetters, command, term);
}

export function HasLength(length: number, command: string, term: string) {
    const test = (input: string) => Test.hasLength(input, length);
    return new SimpleCondition(test, command, term);
}

export function HasMinLength(minLength: number, command: string, term: string) {
    const test = (input: string) => Test.hasMinLength(input, minLength);
    return new SimpleCondition(test, command, term);
}

export function HasMaxLength(maxLength: number, command: string, term: string) {
    const test = (input: string) => Test.hasMaxLength(input, maxLength);
    return new SimpleCondition(test, command, term);
}

export function HasSize(size: number, command: string, term: string) {
    const test = (inputs: Array<string>) => Test.hasSize(inputs, size);
    return new SimpleCondition(test, command, term);
}

export function HasMinSize(minSize: number, command: string, term: string) {
    const test = (inputs: Array<string>) => Test.hasMinSize(inputs, minSize);
    return new SimpleCondition(test, command, term);
}

export function HasMaxSize(maxSize: number, command: string, term: string) {
    const test = (inputs: Array<string>) => Test.hasMaxSize(inputs, maxSize);
    return new SimpleCondition(test, command, term);
}