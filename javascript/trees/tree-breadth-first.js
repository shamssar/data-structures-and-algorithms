'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  breadthFirst() {
    let current = this.root;
    let queue = [];
    let result = [];

    queue.push(current);

    if (!current) {
      return 'Empty tree';
    }

    while (queue.length) {
      current = queue.shift();
      result.push(current.value);
      if (current.left) {
        queue.push(current.left);
      }

      if (current.right) {
        queue.push(current.right);
      }
    }
    return result;
  }
}

module.exports = { Node, BinaryTree};
