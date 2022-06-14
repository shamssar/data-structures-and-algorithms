'use strict';
const LinkedList = require('../linkedList');

describe("Can successfully instantiate an empty linked list", () => {
    it("creat a linklist", () => {
      let list = new LinkedList();
      expect(list.head).toBeNull();
    })
  
  
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
});