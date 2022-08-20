'use strict';

const HashTable = require('../hash-table');
let hashTable = new HashTable(50);

describe('Hash Tables Testing', () => {
  it('Setting a key/value to your hashtable results in the value being in the data structure', () => {
    hashTable.set('food', 'pizaa');
    expect(hashTable.contains('food')).toBeTruthy();
  });
  it('Retrieving based on a key returns the value stored', () => {
    expect(hashTable.get('food')).toStrictEqual('pizaa');
  });
  it('contains', () => {
    expect(hashTable.get('rice')).toBeNull();
    expect(hashTable.contains('rice')).toBeFalsy();
  });
  it('Successfully handle a collision within the hashtable', () => {
    hashTable.set('shams', '98103');
    hashTable.set('maryam', '98121');
    expect(hashTable.contains('shams')).toBeTruthy();
    expect(hashTable.contains('maryam')).toBeTruthy();
  });
  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    expect(hashTable.get('shams')).toStrictEqual('98103');
    expect(hashTable.get('maryam')).toStrictEqual('98121');
  });
  it('Successfully hash a key to an in-range value', () => { });
  let testKey = 'sophia';
  expect(hashTable.hash(testKey)).toBeLessThanOrEqual(50);
});