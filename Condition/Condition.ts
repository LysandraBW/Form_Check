import ErrorMessage from "../Error/ErrorMessage";

export default class Condition extends ErrorMessage {
    test: ((...args: any[]) => boolean | Promise<boolean>);
    
    constructor(test: ((...args: any[]) => boolean | Promise<boolean>)) {
        super();
        this.test = test;
    }
}