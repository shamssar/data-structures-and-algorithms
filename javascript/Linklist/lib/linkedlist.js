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
        publicString(){
            let current = this.head;
            let stringData = "";
            while (current) {
                stringData += current.value + " -> ";
                current = current.next;
            }
            return stringData;
        }

    }

    let live= new LinkedList();
    live.print();
    module.exports= LinkedList;

