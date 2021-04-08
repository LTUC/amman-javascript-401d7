const { expect } = require('@jest/globals');
const Stack = require('../stack.js');

describe('stack tests', () => {
    it('should push to the stack successfully', () => {//LIFO
        //arange
        let stack = new Stack();
        let value = 4;
        //act
        stack.push(value);
        //assert
        expect(stack.values.length).toBe(1);
        expect(stack.top).toBe(value)
    });

    it('should pop from the stack successfully', () => {
        //arange
        let stack = new Stack();
        let value = 4;
        stack.push(value);
        //act
        stack.pop();
        //assert
        expect(stack.values.length).toBe(0);
        expect(stack.top).toBeUndefined();
    });

    it('should not peek an empty stack', () => {//edge case
        //arange
        let stack = new Stack();
        //act
        let item = stack.peek();
        //assert
        expect(item).toBeNull();
    });

    it('should peek the stack successfully', () => {
        //arange
        let stack = new Stack();
        let value = 4;
        stack.push(value);
        //act
        let item = stack.peek();
        //assert
        expect(item).toBe(value)
    });
});
