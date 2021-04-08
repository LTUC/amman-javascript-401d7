class Stack {
    constructor() {
        this.values = new Array();
        this.top = null;
    }

    peek() {
        return this.top;
    }

    push(value) {
        this.values.unshift(value);
        this.top = value;
    }
    
    pop() {
        this.values.shift();
        this.top = this.values[0];
    }
}

module.exports = Stack;