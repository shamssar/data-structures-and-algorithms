'use strict';

const {Node, KaryTree, fizzBuzzTree } = require('../tree-fizz-buzz');

const testTree = new KaryTree(3);

let n1 = new Node(10);
let n2 = new Node(3);
let n3 = new Node(5);
let n4 = new Node(8);
let n5 = new Node(15);
let n6 = new Node(7);
let n7 = new Node(25);
let n8 = new Node(14);
let n9 = new Node(9);
let n10 = new Node(18);
let n11 = new Node(30);
let n12 = new Node(1);

testTree.root = n1;

n1.children = [n2, n3];
n2.children = [n4, n5, n6];
n3.children = [n8, n9];
n5.children = [n7];
n8.children = [n10, n11, n12];

describe('Testing fizzBuzzTree function', () => {
  it('should return an exception on an empty tree', () => {
    let emptyTree = new KaryTree(0);
    let result = fizzBuzzTree(emptyTree);
    expect(result).toEqual('EMPTY TREE');
  });

  it('should return fizz buzz, fizzbuzz, or number tree as expected', () => {
    let fbTree = fizzBuzzTree(testTree);
    let node2 = fbTree.root.children[0];
    let node3 = fbTree.root.children[1];
    let node4 = node2.children[0];
    let node5 = node2.children[1];
    let node6 = node2.children[2];
    let node7 = node5.children[0];
    let node8 = node3.children[0];
    let node9 = node3.children[1];
    let node10 = node8.children[0];
    let node11 = node8.children[1];
    let node12 = node8.children[2];

    expect(fbTree.root.value).toEqual('Buzz');
    expect(node2.value).toEqual('Fizz');
    expect(node3.value).toEqual('Buzz');
    expect(node4.value).toEqual('8');
    expect(node5.value).toEqual('FizzBuzz');
    expect(node6.value).toEqual('7');
    expect(node7.value).toEqual('Buzz');
    expect(node8.value).toEqual('14');
    expect(node9.value).toEqual('Fizz');
    expect(node10.value).toEqual('Fizz');
    expect(node11.value).toEqual('FizzBuzz');
    expect(node12.value).toEqual('1');
  });
});