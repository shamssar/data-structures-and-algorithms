'use strict';

const leftJoin = require('../hashmap-left-join');
const HashTable = require('../../hash-table/hash-table');

describe('Hashmap repeated word tests', () => {
  const synonyms = new HashTable(1024);
  const antonyms = new HashTable(1024);

  synonyms.add('fond', 'enamored');
  synonyms.add('wrath', 'anger');
  synonyms.add('diligent', 'employed');
  synonyms.add('outfit', 'garb');
  synonyms.add('guide', 'usher');

  antonyms.add('fond', 'averse');
  antonyms.add('wrath', 'delight');
  antonyms.add('diligent', 'idle');
  antonyms.add('guide', 'follow');
  antonyms.add('flow', 'jam');

  test('Left join two hasmaps', () => {
    expect(leftJoin(synonyms, antonyms)).toMatchObject([
      ['diligent', 'employed', 'idle'],
      ['outfit', 'garb', null],
      ['fond', 'enamored', 'averse'],
      ['guide', 'usher', 'follow'],
      ['wrath', 'anger', 'delight'],
    ]);
  });
});