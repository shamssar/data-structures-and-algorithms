'use strict';

const LinkedList = require('../linked-list/linkedList');

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
  test('Where k is greater than the length of the linked list', () => {
    let List = new LinkedList();
    List.insert('s');
    List.insert('h');
    List.insert('a');
    expect(List.kthFromEnd(4)).toBe('Exception');
  });
  test('Where k and the length of the list are the same', () => {
    let List = new LinkedList();
    List.insert('s');
    List.insert('h');
    List.insert('a');
    expect(List.kthFromEnd(3)).toBe('s');
  });
  test('Where k is not a positive integer', () => {
    let List = new LinkedList();
    List.insert('s');
    List.insert('h');
    List.insert('a');
    expect(List.kthFromEnd(-1)).toBe('Exception');
  });
  test('Where the linked list is of a size 1', () => {
    let List = new LinkedList();
    List.insert('s');
    expect(List.kthFromEnd(1)).toBe('s');
  });
  test('where k is not at the end, but somewhere in the middle of the linked list', () => {
    let List = new LinkedList();
    List.insert('s');
    List.insert('h');
    List.insert('a');
    expect(List.kthFromEnd(2)).toBe('h');
  });

  it("Zip the two linked lists together", () => {
    const ll1 = new LinkedList();
    const ll2 = new LinkedList();
    let ll=new LinkedList();
    ll1.append(6);
    ll1.append(3);
    ll1.append(2);
    ll2.append(1);
    ll2.append(8);
    ll2.append(4);
    ll=ll1.zipLists(ll1,ll2);
   expect(ll.toString()).toBe("6 -> 1 -> 3 -> 8 -> 2 -> 4 -> ");
});

it("Zip the two linked lists together, list2 had one more node", () => {
  const ll1 = new LinkedList();
  const ll2 = new LinkedList();
  let ll=new LinkedList();
  ll1.append(6);
  ll1.append(3);
  ll2.append(5);
  ll2.append(8);
  ll2.append(4);
  ll=ll1.zipLists(ll1,ll2);
 expect(ll.toString()).toEqual("6 -> 5 -> 3 -> 8 -> 4 -> ");
});

it("Zip the two linked lists together, list1 had one more node", () => {
  const ll1 = new LinkedList();
  const ll2 = new LinkedList();
  let ll=new LinkedList();
  ll1.append(6);
  ll1.append(3);
  ll1.append(2);
  ll2.append(5);
  ll2.append(8);
  ll=ll1.zipLists(ll1,ll2);
 expect(ll.toString()).toEqual("6 -> 5 -> 3 -> 8 -> 2 -> ");
});
})