class Queue {
    constructor() {
        this.values = new Array();
    }

    peek() {
        return this.values[0];
    }

    enqueue(value) {
        this.values.push(value);
    }

    dequeue() {
        this.values.shift();
    }

}
module.exports = Queue;