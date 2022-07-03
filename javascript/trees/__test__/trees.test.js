'use strict';

const { BST } = require('../trees');

let tree = new BST;
tree.add(10);
tree.add(8);
tree.add(14);
tree.add(5);
tree.add(9);
tree.add(12);
tree.add(17);

describe('Testing Binary Tree and Binary Search Tree Methods', () => {
  it('can successfully instantiate an empty tree', () => {
    let emptyTree = new BST;

    expect(emptyTree.root).toBeNull();
    expect(JSON.stringify(emptyTree)).toEqual('{"root":null}');
  });
  it('can successfully instantiate a tree with a single root node', () => {
    let singleNodeTree = new BST;
    singleNodeTree.add(10);

    expect(singleNodeTree.root.value).toEqual(10);
  });
  it('can successfully add a left child to a node', () => {
    let leftNodeTree = new BST;
    leftNodeTree.add(10);
    leftNodeTree.add(8);

    expect(leftNodeTree.root.left.value).toEqual(8);
  });
  
  it('can return a collection from a preorder traversal', () => {

    let order = tree.preOrder();
    expect(order).toEqual([10, 8, 5, 9, 14, 12, 17]);

  });
  it('can return a collection from a inorder traversal', () => {

    let order = tree.inOrder();
    expect(order).toEqual([5, 8, 9, 10, 12, 14, 17]);

  });
  it('can return a collection from a postorder traversal', () => {

    let order = tree.postOrder();
    expect(order).toEqual([5, 9, 8, 12, 17, 14, 10]);

  });

});