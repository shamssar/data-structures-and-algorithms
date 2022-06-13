'use strict';
const Node = require('./node');


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    addingFirst(value){
        this.head=new Node(value,this.head)
    }
    insert(value){
        let node=new Node(value);
        if(this.head == null){
            this.head = node;
            this.tail = node;
        }
        else{
            this.tail.next = node;
            this.tail = node;
             }
        this.length++;
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    
        publicString(){
            let current = this.head;
            let stringData = "";
            while (current) {
                stringData += current.value + " -> ";
                current = current.next;
            }
            return stringData;
        }

        publicBoolean(value) {

          let current = this.head;
          while (current) {
  
              if (current.value === value) {
                  return true;
              }
              current = current.next;
          }
          return false;
      }

  // adds a new node with the given value to the end of the list
  append(newValue) {
    let newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let tempNode = this.head;
      while (tempNode.next) {
        tempNode = tempNode.next;
      }
      tempNode.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  //adds a new node with the given new value immediately before the first node that has the value specified
  insertBefore(value, newValue) {
    let newNode = new Node(newValue);
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode) {
      if (currentNode.value === value) {
        if (previousNode === null) {
          this.head = newNode;
          newNode.next = currentNode;
        } else {
          previousNode.next = newNode;
          newNode.next = currentNode;
        }
        this.length++;
        return;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }
  //adds a new node with the given new value immediately after the first node that has the value specified
  insertAfter(value, newValue) {
    let newNode = new Node(newValue);
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length++;
        return;
      }
      currentNode = currentNode.next;
    }
  }
}

let live= new LinkedList();
live.print();

module.exports = LinkedList;
