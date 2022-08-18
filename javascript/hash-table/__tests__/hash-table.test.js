'use strict';

const HashTable = require('../hash-table');
let hashTable = new HashTable(50);

describe('Hash Tables Testing', () => {
  it('Add', () => {
    hashTable.set('cat', 'sabreen');
    expect(hashTable.contains('cat')).toBeTruthy();
  });
  it('Retrieving based on a key returns the value stored', () => {
    expect(hashTable.get('cat')).toStrictEqual('sabreen');
  });
  it('contains', () => {
    expect(hashTable.get('dog')).toBeNull();
    expect(hashTable.contains('dog')).toBeFalsy();
  });
  it('Successfully handle a collision within the hashtable', () => {
    hashTable.set('Greenwood', '98103');
    hashTable.set('Belltown', '98121');
    expect(hashTable.contains('Greenwood')).toBeTruthy();
    expect(hashTable.contains('Belltown')).toBeTruthy();
  });
  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    expect(hashTable.get('Greenwood')).toStrictEqual('98103');
    expect(hashTable.get('Belltown')).toStrictEqual('98121');
  });
  it('Successfully hash a key to an in-range value', () => { });
  let testKey = 'Mercer Island';
  expect(hashTable.hash(testKey)).toBeLessThanOrEqual(50);
});