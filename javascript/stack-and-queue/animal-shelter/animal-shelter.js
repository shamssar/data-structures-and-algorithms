"use strict";
const Queue = require('../queue/lib/queue');
class AnimalShelter {
    constructor() {
        this.cats = new Queue();
        this.dogs = new Queue();
        this.length = 0;
    }
    enqueue(x) {
        if (x.kind === 'cat') {
            this.cats.enqueue(x);
            this.length++;
        } else if (x.kind === 'dog') {
            this.dogs.enqueue(x);
            this.length++;
        } else {
            return 'only cats or dogs are allowed'
        }
    }
    dequeue(kind) {
        if (this.length === 0) return 'empty';
        if (kind === 'dog') {
            this.length--;
            return this.dogs.dequeue(kind);
        } else if (kind === 'cat') {
            this.length--;
            return this.cats.dequeue(kind);
        } else {
            return null;
        }
    }
}
module.exports = AnimalShelter;