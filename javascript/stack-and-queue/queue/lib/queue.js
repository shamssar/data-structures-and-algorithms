'use strict';
const Node = require('./node');
class queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }
    isEmpty() {
        if (this.front === null || this.length === 0) {
            return true;
        } else {
            return false;
        }

    }
    enqueue(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
            this.length += 1;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
            this.length += 1;
        }
    }
    dequeue() {
        if (this.isEmpty()) {
            return 'empty';
        } else {
            const temp = this.front;
            this.front = this.front.next;
            temp.next = null;
            this.length -= 1;
            return temp.value;
        }
    }
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.front.value;
    }
}
module.exports = queue;