'use strict';
const Node = require('./node ');

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {

    const order = [];
    let current = this.root;

    if (!current) return 'EMPTY TREE';

    let traverse = (node) => {
      order.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(current);
    return order;

  }

  inOrder() {
   
    const order = [];
    let current = this.root;

    if (!current) return 'EMPTY TREE';

    let traverse = (node) => {
      if (node.left) traverse(node.left);
      order.push(node.value);
      if (node.right) traverse(node.right);
    };

    traverse(current);
    return order;

  }

  postOrder() {
    const order = [];
    let current = this.root;

    if (!current) return 'EMPTY TREE';

    let traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      order.push(node.value);
    };

    traverse(current);
    return order;

  }
}

class BST extends BinaryTree {
 
  add(value) {
    if (typeof (value) !== 'number') return 'EXPECTED NUMBER';

    let node = new Node(value);

    if (this.root === null) {
      this.root = node;
    } else {
      let current = this.root;
      let traverse = true;
      while (traverse) {
        if (node.value < current.value && current.left) {
          current = current.left;
        } else if (node.value < current.value) {
          current.left = node;
          traverse = false;
        }
        if (node.value >= current.value && current.right) {
          current = current.right;
        } else if (node.value >= current.value) {
          current.right = node;
          traverse = false;
        }
      }
    }
  }

  contains(value) {
    if (typeof (value) !== 'number') return 'EXPECTED NUMBER';
    if (this.root === null) return 'EMPTY TREE';

    let current = this.root;
    let traverse = true;
    while (traverse) {
      if (value === current.value) return true;
      if (value < current.value) {
        if (current.left) {
          current = current.left;
        } else {
          return false;
        }
      }
      if (value > current.value) {
        if (current.right) {
          current = current.right;
        } else {
          return false;
        }
      }
    }
  }
}

module.exports = { BinaryTree,BST};