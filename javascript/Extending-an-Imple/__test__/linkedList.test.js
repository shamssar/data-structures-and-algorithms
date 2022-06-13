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
  it("Can properly insert multiple nodes into the linked list", () => {
    let list = new LinkedList();
    list.insert("shams");
    list.insert("shams");
    list.insert("shams");
    list.insert("shams");
    expect(list.length > 2).toEqual(true)
  })
  it("Will return true when finding a value within the linked list that exists", () => {
    let list = new LinkedList();
    list.insert(1)
    expect(list.publicBoolean(1)).toEqual(true)
  })

  it("Will return fale when searching for a value in the linked list that does not exists", () => {
    let list = new LinkedList();
    list.insert(85)
    expect(list.publicBoolean(1)).toEqual(false)
  })
  test("Can properly return a collection of all the values that exist in the linked list", () => {
    let List = new LinkedList();
    List.insert("a");
    List.insert("b");
    List.insert("c");
    expect(List.publicString()).toEqual("a -> b -> c -> ");
  })

  test('Can successfully add a node to the end of the linked list', () => {
    let List = new LinkedList();
    List.insert('s');
    List.insert('h');
    List.insert('s');
    List.insert('m');
    List.insert('s');
    List.append('a');
    expect(List.publicString()).toBe('s -> h -> s -> m -> s -> a -> ');
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
    expect(List.publicString()).toBe('s -> h -> a -> m -> s -> a -> h -> m -> ');
  });
  test('Can successfully insert a node before a node located in the middle of a linked list', () => {
    let List = new LinkedList();
    List.insert('s');
    List.insert('h');
    List.insert('a');
    List.insertBefore('h', 'c');
    expect(List.publicString()).toBe('s -> c -> h -> a -> ');
  });
  test('Can successfully insert a node before the first node of a linked list', () => {
    let List = new LinkedList();
    List.insert('s');
    List.insert('h');
    List.insert('a');
    List.insertBefore('s', 'c');
    expect(List.publicString()).toBe('c -> s -> h -> a -> ');
  });
  test('Can successfully insert after a node in the middle of the linked list', () => {
    let List = new LinkedList();
    List.insert('s');
    List.insert('h');
    List.insert('n');
    List.insertAfter('h', 'c');
    expect(List.publicString()).toBe('s -> h -> c -> n -> ');
  });
  test('Can successfully insert a node after the last node of the linked list', () => {
    let List = new LinkedList();
    List.insert('s');
    List.insert('h');
    List.insert('n');
    List.insertAfter('n', 'c');
    expect(List.publicString()).toBe('s -> h -> n -> c -> ');
  });
});

