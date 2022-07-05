'use strict';
const BinaryTree = require("../BinaryTree");
const Node = require("../node ");
const BinarySearchTree = require("../BinarySearchTree");

let tree=null;

describe('TREES TEST',()=>{

    beforeAll(() => {
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let six = new Node(6);
        let seven = new Node(7);
        let eight = new Node(8);
        let nine = new Node(9);

        one.left = two;
        one.right = three;
        two.left = six;
        six.right = seven;
        seven.left = eight;
        seven.right = nine;
        three.left = four;
        three.right = five;

        tree = new BinaryTree(one);
    });

    it('Can successfully instantiate an empty tree',()=>{
        const newTree = new BinaryTree();
        expect(newTree.root).toBeNull();
    })
    it("Can successfully instantiate a tree with a single root node", () => {
        let node = new Node(1);
        let tree = new BinaryTree(node);
        expect(tree.root.value).toEqual(1);
      });
      it(" can successfully add a left child and right child properly to a node", () => {
        let node = new Node(2);
        let tree = new BinarySearchTree(node);
        tree.add(1, node);
        tree.add(3, node);
        expect(tree.root.left.value).toEqual(1);
        expect(tree.root.right.value).toEqual(3);
      });
      test('Can successfully return a collection from a preorder traversal', () => {
        let expectedOutput = [1, 2, 6, 7, 8, 9, 3, 4, 5];
        let preOrder = tree.preOrder();
        expect(preOrder).toEqual(expectedOutput);
    });
    test('Can successfully return a collection from an inorder traversal', () => {
        let expectedOutput = [6, 8, 7, 9, 2, 1, 4, 3, 5];
        let inOrder = tree.inOrder();
        expect(inOrder).toEqual(expectedOutput);
    });
    test('Can successfully return a collection from a postorder traversal', () => {
        let expectedOutput = [8, 9, 7, 6, 2, 4, 5, 3, 1];
        let postOrder = tree.postOrder();
        expect(postOrder).toEqual(expectedOutput);
    });

    test('Can successfully return the max value in a tree', () => {
        let output = 9;
        let max = tree.findMax(tree.root);
        expect(max).toEqual(output);
    });
    test('Can successfully return Exception in using findMax function on an empty tree', () => {
        const newTree = new BinaryTree();
        expect(newTree.findMax(newTree.root)).toEqual("Empty tree");
    });
})