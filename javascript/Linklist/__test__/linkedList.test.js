'use strict';

const LinkedList = require('../lib/linkedlist');

describe("Can successfully instantiate an empty linked list",()=>{
    it ("creat a linklist", ()=>{
        let list = new LinkedList();
        expect(list.head).toBeNull();
    })
    it("Can properly insert into the linked list", () => {
        let list = new LinkedList();
        list.insert("shams");
        expect(list.head.value).toEqual('shams');
      })
      it ("The head property will properly point to the first node in the linked list",()=>{
        let list = new LinkedList();
        list.insert("a");
        list.insert("b");
        list.insert("c");
        list.insert("d");
        expect(list.head.value).toEqual("a")
      
      })
      it ("Can properly insert multiple nodes into the linked list",()=>{
        let list = new LinkedList();
        list.insert("shams");
        list.insert("shams");
        list.insert("shams");
        list.insert("shams");
        expect(list.length>2).toEqual(true)
      })
      it ("Will return true when finding a value within the linked list that exists",()=>{
        let list = new LinkedList();
        list.insert(1)
        expect(list.publicBoolean(1)).toEqual(true)
      })
      
      it ("Will return fale when searching for a value in the linked list that does not exists",()=>{
        let list = new LinkedList();
        list.insert(85)
        expect(list.publicBoolean(1)).toEqual(false)
      })
      test ("Can properly return a collection of all the values that exist in the linked list",()=>{
        let List= new LinkedList();
        List.insert("a")
        List.insert("b")
        List.insert("c")
        expect(List.publicString()).toEqual("a -> b -> c -> ")
      })
    
    })