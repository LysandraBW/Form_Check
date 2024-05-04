import SimpleCondition from "../Condition/Simple/Condition";
import * as Test from "../Condition/Simple/Defined/Defined";
import * as Command from "../Grammar/Command";

interface DefaultCondition {
    function: (...args: any[]) => SimpleCondition;
    command: string;
    term: ((...args: any[]) => string);
}

export default class FormContext {
    DEFAULT_CONDITION: {[name: string]: DefaultCondition} = {
        HasInput: {
            function: ({command, term}) => Test.HasInput(command, term),
            command: Command.ENTER,
            term: ({}) =>  "input"
        },
        HasInputs: {
            function: ({command, term}) => Test.HasInputs(command, term),
            command: Command.SELECT,
            term: ({}) =>  "an input"
        },
        InputIn: {
            function: ({command, term, options}) => Test.InputIn(command, term, options),
            command: Command.SELECT,
            term: ({}) =>  "an input"
        },
        InputsIn: {
            function: ({command, term, options}) => Test.InputsIn(command, term, options),
            command: Command.SELECT,
            term: ({}) =>  "an input"
        },
        IsName: {
            function: ({command, term}) => Test.IsName(command, term),
            command: Command.BE,
            term: ({}) =>  "a name"
        },
        IsPhoneNumber: {
            function: ({command, term}) => Test.IsPhoneNumber(command, term),
            command: Command.BE,
            term: ({}) =>  "a phone number"
        },
        IsEmailAddress: {
            function: ({command, term}) => Test.IsEmailAddress(command, term),
            command: Command.BE,
            term: ({}) =>  "a email address"
        },
        IsVIN: {
            function: ({command, term}) => Test.IsVIN(command, term),
            command: Command.BE,
            term: ({}) =>  "a VIN"
        },
        IsLicensePlate: {
            function: ({command, term}) => Test.IsLicensePlate(command, term),
            command: Command.BE,
            term: ({}) =>  "a license plate"
        },
        IsCardNumber: {
            function: ({command, term}) => Test.IsCardNumber(command, term),
            command: Command.BE,
            term: ({}) =>  "a card number"
        },
        IsExpirationDate: {
            function: ({command, term}) => Test.IsExpirationDate(command, term),
            command: Command.BE,
            term: ({}) =>  "a expiration date"
        },
        IsCVV: {
            function: ({command, term}) => Test.IsCVV(command, term),
            command: Command.BE,
            term: ({}) =>  "a CVV"
        },
        IsNumber: {
            function: ({command, term}) => Test.IsNumber(command, term),
            command: Command.BE,
            term: ({}) =>  "a number"
        },
        IsFloat: {
            function: ({command, term}) => Test.IsFloat(command, term),
            command: Command.BE,
            term: ({}) =>  "a float"
        },
        IsPrice: {
            function: ({command, term}) => Test.IsPrice(command, term),
            command: Command.BE,
            term: ({}) =>  "a price"
        },
        NoSymbols: {
            function: ({command, term}) => Test.NoSymbols(command, term),
            command: Command.NOT_HAVE,
            term: ({}) =>  "symbols"
        },
        NoNumbers: {
            function: ({command, term}) => Test.NoNumbers(command, term),
            command: Command.NOT_HAVE,
            term: ({}) =>  "numbers"
        },
        NoLetters: {
            function: ({command, term}) => Test.NoLetters(command, term),
            command: Command.NOT_HAVE,
            term: ({}) =>  "letters"
        },
        HaveSymbols: {
            function: ({command, term}) => Test.HaveSymbols(command, term),
            command: Command.NOT_HAVE,
            term: ({}) =>  "symbols"
        },
        HaveNumbers: {
            function: ({command, term}) => Test.HaveNumbers(command, term),
            command: Command.NOT_HAVE,
            term: ({}) =>  "numbers"
        },
        HaveLetters: {
            function: ({command, term}) => Test.HaveLetters(command, term),
            command: Command.NOT_HAVE,
            term: ({}) =>  "letters"
        },
        OnlySymbols: {
            function: ({command, term}) => Test.OnlySymbols(command, term),
            command: Command.ONLY_HAVE,
            term: ({}) => "symbols"
        },
        OnlyNumbers: {
            function: ({command, term}) => Test.OnlyNumbers(command, term),
            command: Command.ONLY_HAVE,
            term: ({}) =>  "numbers"
        },
        OnlyLetters: {
            function: ({command, term}) => Test.OnlyLetters(command, term),
            command: Command.ONLY_HAVE,
            term: ({}) =>  "letters"
        },
        HasLength: {
            function: ({command, term, length}) => Test.HasLength(length, command, term),
            command: Command.HAVE,
            term: ({length}) => {
                return `${length} characters`
            }
        },
        HasMinLength: {
            function: ({command, term, minLength}) => Test.HasMinLength(minLength, command, term),
            command: Command.HAVE,
            term: ({minLength}) => {
                return `at least ${minLength} characters`
            }
        },
        HasMaxLength: {
            function: ({command, term, maxLength}) => Test.HasMaxLength(maxLength, command, term),
            command: Command.HAVE,
            term: ({maxLength}) => {
                return `at most ${maxLength} characters`
            }
        },
        HasSize: {
            function: ({command, term, size}) => Test.HasSize(size, command, term),
            command: Command.HAVE,
            term: ({size}) => {
                return `${size} selections`
            }
        },
        HasMinSize: {
            function: ({command, term, minSize}) => Test.HasMinSize(minSize, command, term),
            command: Command.HAVE,
            term: ({minSize}) => {
                return `at least ${minSize} selections`
            }
        },
        HasMaxSize: {
            function: ({command, term, maxSize}) => Test.HasMaxSize(maxSize, command, term),
            command: Command.HAVE,
            term: ({maxSize}) => {
                return `at most ${maxSize} selections`
            }
        }
    }

    getCondition(name: string, args: {[key: string]: any}) {
        const condition = this.DEFAULT_CONDITION[name];
        if (!condition)
            throw new Error("Undefined Condition");

        return condition.function({
            ...args, 
            command: args.command ? args.command : condition[name].command, 
            term: args.term ? args.term : condition[name].term(args)
        });
    }

    setCondition(name: string, def: DefaultCondition) {
        this.DEFAULT_CONDITION[name] = def;
    }
}
