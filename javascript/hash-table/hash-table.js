'use strict';

const LinkedList = require('../linkedlist/linked-list/linkedList');


class HashTable {

    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

    hash(key) {
        const assciMulti = key.split('').reduce((p, n) => p + n.charCodeAt(0), 0);
        const withPrime = assciMulti * 599;
        return withPrime % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        const bucket = { [key]: value };
        if (!this.table[index]) {
            this.table[index] = new LinkedList();
        }
        this.table[index].append(bucket)
    }

    get(key) {
        const index = this.hash(key);
        if (this.table[index]) {
            let temp = this.table[index].head
            while (temp) {
                if (temp.value[key]) {
                    return temp.value[key]
                }
                temp = temp.next
            }
        }
        return null;
    }

    contains(key) {
        let index = this.hash(key)
        if (this.table[index]) {
            let temp = this.table[index].head
            while (temp) {
                if (temp.value[key]) {
                    return true
                }
                temp = temp.next
            }
        }
        return false;
    }
}


module.exports = HashTable;