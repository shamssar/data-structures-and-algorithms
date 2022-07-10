'use strict';


class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class KaryTree {
  constructor(k) {
    this.root = null;
    this.k = k;
  }
}

function fizzBuzzTree(tree) {

  if (!tree.root) return 'EMPTY TREE';
  let current = tree.root;

  let traverse = (node) => {
    let value;
    if (node.value % 3 === 0 && node.value % 5 === 0) {
      value = 'FizzBuzz';
    } else if (node.value % 3 === 0) {
      value = 'Fizz';
    } else if (node.value % 5 === 0) {
      value = 'Buzz';
    } else {
      value = `${node.value}`;
    }

    const newNode = new Node(value);

    if (node.children.length) {
      console.log(node.children.length);
      for (let i = 0; i < node.children.length; i++) {
        newNode.children[i] = traverse(node.children[i]);
      }
    }
    return newNode;
  };

  const newTree = new KaryTree(3);
  newTree.root = traverse(current);
  return newTree;
}



module.exports = {
  Node,
  KaryTree,
  fizzBuzzTree,
};