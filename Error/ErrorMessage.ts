export default class ErrorMessage {
    EMP: {[key: string]: string};

    getContext(): string {
        return this.EMP.context;
    }

    getCommand(): string {
        return this.EMP.command;
    }

    getTerm(): string {
        return this.EMP.term;
    }

    getConjunction(): string {
        return this.EMP.conjunction;
    }

    setContext(context: string) {
        this.EMP.context = context;
    }

    setCommand(command: string) {
        this.EMP.command = command;
    }

    setTerm(term: string) {
        this.EMP.term = term;
    }

    setConjunction(conjunction: string) {
        this.EMP.conjunction = conjunction;
    }
}