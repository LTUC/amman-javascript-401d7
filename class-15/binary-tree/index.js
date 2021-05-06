'use strict';
class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  // Time : O(n) n = the number of nodes
  // Space : O(h) h = h is the hight of the tree
  // Root = Left - Right
  preOrder() {
    const results = [];
    const _traverse = (node) => {
      //push the value to the array
      results.push(node.value);
      // check if it have left _traverse(node.left)
      if (node.left) _traverse(node.left);
      // check if it have right _traverse(node.right)
      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);
    return results;
  }

  // Left - Root - Right
  inOrder() {
    const results = [];
    const _traverse = (node) => {
      // check if it have left _traverse(node.left)
      if (node.left) _traverse(node.left);
      //push the value to the array
      results.push(node.value);
      // check if it have right _traverse(node.right)
      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);
    return results;
  }
  // left - Right - Root
  postOrder() {
    const results = [];
    const _traverse = (node) => {
      // check if it have left _traverse(node.left)
      if (node.left) _traverse(node.left);
      // check if it have right _traverse(node.right)
      if (node.right) _traverse(node.right);
      //push the value to the array
      results.push(node.value);
    };
    _traverse(this.root);
    return results;
  }
}

module.exports = BinaryTree;
