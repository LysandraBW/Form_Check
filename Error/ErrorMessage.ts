export default class ErrorMessage {
    // This stores the parts of an error message.
    parts: {[key: string]: string};

    getContext(): string {
        return this.parts.context;
    }

    getCommand(): string {
        return this.parts.command;
    }

    getTerm(): string {
        return this.parts.term;
    }

    getConjunction(): string {
        return this.parts.conjunction;
    }

    setContext(context: string) {
        this.parts.context = context;
    }

    setCommand(command: string) {
        this.parts.command = command;
    }

    setTerm(term: string) {
        this.parts.term = term;
    }

    setConjunction(conjunction: string) {
        this.parts.conjunction = conjunction;
    }
}