import * as RegExp from "../../../Grammar/RegExp";

export function hasInput(input: string): boolean {
    return input.trim().length > 0;
}

export function hasInputs(inputs: Array<string>): boolean {
    return inputs.length > 0;
}

export function isName(input: string): boolean {
    return RegExp.IS_NAME.test(input);
}

export function isPhoneNumber(input: string): boolean {
    return RegExp.IS_PHONE_NUMBER.test(input);
}

export function isEmailAddress(input: string): boolean {
    return RegExp.IS_EMAIL_ADDRESS.test(input);
}

export function isVIN(input: string): boolean {
    return RegExp.IS_VIN.test(input);
}

export function isLicensePlate(input: string): boolean {
    return RegExp.IS_LICENSE_PLATE.test(input);
}

export function isCardNumber(input: string): boolean {
    return RegExp.IS_CARD_NUMBER.test(input);
}

export function isExpirationDate(input: string): boolean {
    return RegExp.IS_EXPIRATION_DATE.test(input);
}

export function isCVV(input: string): boolean {
    return RegExp.IS_CVV.test(input);
}

export function isNumber(input: string): boolean {
    return RegExp.IS_NUMBER.test(input);
}

export function isFloat(input: string): boolean {
    return RegExp.IS_FLOAT.test(input);
}

export function isPrice(input: string): boolean {
    return RegExp.IS_PRICE.test(input);
}

export function noSymbols(input: string): boolean {
    return !input.match(RegExp.HAS_SYMBOL);
}

export function noNumbers(input: string): boolean {
    return !input.match(RegExp.HAS_NUMBER);
}

export function noLetters(input: string): boolean {
    return !input.match(RegExp.HAS_LETTER);
}

export function haveSymbols(input: string): boolean {
    return input.match(RegExp.HAS_SYMBOL) !== null;
}

export function haveNumbers(input: string): boolean {
    return input.match(RegExp.HAS_NUMBER) !== null;
}

export function haveLetters(input: string): boolean {
    return input.match(RegExp.HAS_LETTER) !== null;
}

export function onlySymbols(input: string): boolean {
    return RegExp.ONLY_SYMBOLS.test(input);
}

export function onlyNumbers(input: string): boolean {
    return RegExp.ONLY_NUMBERS.test(input);
}

export function onlyLetters(input: string): boolean {
    return RegExp.ONLY_LETTERS.test(input);
}

export function hasLength(input: string, length: number) {
    return input.length === length;
}

export function hasMinLength(input: string, minLength: number): boolean {
    return input.length >= minLength;
}

export function hasMaxLength(input: string, maxLength: number): boolean {
    return input.length <= maxLength;
}

export function hasSize(inputs: Array<string>, size: number) {
    return inputs.length === size;
}

export function hasMinSize(inputs: Array<string>, minSize: number) {
    return inputs.length >= minSize;
}

export function hasMaxSize(inputs: Array<string>, maxSize: number) {
    return inputs.length <= maxSize;
}

export function inputIn(input: string, options: Array<string>) {
    return options.includes(input);
}

export function inputsIn(inputs: Array<string>, options: Array<string>) {
    inputs.sort();
    options.sort();

    let index = -1;

    for (const input of inputs) {
        while (options[++index] != input) {
            if (index >= parent.length) {
                return false;
            }
        }
    }
    
    return true;
}