const { expect } = require('@jest/globals');
const Queue = require('../queue.js');

describe('stack tests', () => {
    it('should not peek an empty queue', () => {
        //arrange
        let queue = new Queue();
        //act
        let item = queue.peek();
        //assert
        expect(item).toBeUndefined();
    });

    it('should enqueue to the queue successfully', () => {
        //arrange
        let queue = new Queue();//FIFO
        let value = 1;
        let value2 = 2;
        //act
        queue.enqueue(value);// 1
        queue.enqueue(value2);// 1
        //assert
        expect(queue.values.length).toBe(2);
        expect(queue.values[0]).toBe(value);
    });

    it('should dequeue from the queue successfully', () => {
        //arrange
        let queue = new Queue();
        let value = 1;
        queue.enqueue(value);
        //act
        queue.dequeue();
        //assert
        expect(queue.values.length).toBe(0);
    });

    it('should peek the queue successfully', () => {
        //arrange
        let queue = new Queue();
        let value = 1;
        queue.enqueue(value);
        //act
        let item = queue.peek();
        //assert
        expect(item).toBe(value);
    });
});
