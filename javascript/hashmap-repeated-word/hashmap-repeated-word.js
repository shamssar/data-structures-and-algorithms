'use strict';

const HashTable = require('../hash-table/hash-table');



function repeatedWord(str) {
    let string = str.toLowerCase().match(/\w+/g);
    const hashtableString = new HashTable(string.length);
    for (let i = 0; i < string.length; i++) {
        if (hashtableString.contains(string[i])) {
            return string[i];
        }
        hashtableString.set(string[i], string[i]);
    }
    return 'NUll';
}
module.exports = repeatedWord;