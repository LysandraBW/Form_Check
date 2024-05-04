import ErrorMessage from "../Error/ErrorMessage";

export default class Condition extends ErrorMessage {
    test: ((...args: any[]) => boolean);
    
    constructor(test: ((...args: any[]) => boolean)) {
        super();
        this.test = test;
    }
}