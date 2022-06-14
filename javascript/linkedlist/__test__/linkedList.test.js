'use strict';

const LinkedList = require('../lib/linkedList');

describe("Can successfully instantiate an empty linked list", () => {
  it("creat a linklist", () => {
    let list = new LinkedList();
    expect(list.head).toBeNull();
  })
  it("Can  insert into the linked list", () => {
    let list = new LinkedList();
    list.insert("shams");
    expect(list.head.value).toEqual('shams');
  })
  it("The head property will properly point to the first node in the linked list", () => {
    let list = new LinkedList();
    list.insert("a");
    list.insert("b");
    list.insert("c");
    list.insert("d");
    expect(list.head.value).toEqual("a")

  })
  
 

  
  
  test('Can successfully add a node to the end of the linked list', () => {
    let List = new LinkedList();
    List.insert('s');
    List.insert('h');
    List.insert('s');
    List.insert('m');
    List.insert('s');
    List.append('a');
    expect(List.toString()).toBe('s -> h -> s -> m -> s -> a -> ');
  });
  test('Can successfully add multiple nodes to the end of a linked list', () => {
    let List = new LinkedList();
    List.insert('s');
    List.insert('h');
    List.insert('a');
    List.insert('m');
    List.insert('s');
    List.append('a');
    List.append('h');
    List.append('m');
    expect(List.toString()).toBe('s -> h -> a -> m -> s -> a -> h -> m -> ');
  });
  test('Can successfully insert a node before a node located in the middle of a linked list', () => {
    let List = new LinkedList();
    List.insert('s');
    List.insert('h');
    List.insert('a');
    List.insertBefore('h', 'c');
    expect(List.toString()).toBe('s -> c -> h -> a -> ');
  });
  test('Can successfully insert a node before the first node of a linked list', () => {
    let List = new LinkedList();
    List.insert('s');
    List.insert('h');
    List.insert('a');
    List.insertBefore('s', 'c');
    expect(List.toString()).toBe('c -> s -> h -> a -> ');
  });
  test('Can successfully insert after a node in the middle of the linked list', () => {
    let List = new LinkedList();
    List.insert('s');
    List.insert('h');
    List.insert('n');
    List.insertAfter('h', 'c');
    expect(List.toString()).toBe('s -> h -> c -> n -> ');
  });
  test('Can successfully insert a node after the last node of the linked list', () => {
    let List = new LinkedList();
    List.insert('s');
    List.insert('h');
    List.insert('n');
    List.insertAfter('n', 'c');
    expect(List.toString()).toBe('s -> h -> n -> c -> ');
  });
});

