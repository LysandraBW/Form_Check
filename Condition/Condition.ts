export default class Condition {
    test: ((...args: any[]) => boolean);

    constructor(test: ((...args: any[]) => boolean)) {
        this.test = test;
    }
}