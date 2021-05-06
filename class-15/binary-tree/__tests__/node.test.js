'use strict';
const Node = require('../node.js');

describe('Node Module', () => {
  it('create an instance of Node', () => {
    const node = new Node();
    expect(node instanceof Node).toBeTruthy();
  });
  it('create an instance of Node with the correct properties', () => {
    const value = 'any value';
    const node = new Node(value);
    expect(node.value).toEqual(value);
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  });
});
