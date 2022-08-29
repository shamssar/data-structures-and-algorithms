const HashTable = require('../hash-table/hash-table');

function leftJoin(map1, map2) {
  let result = [];
  let tmp = [];
  map1.map.forEach(key => {
    tmp.push(key.values());
  });
  for (let i = 0; i < tmp.length; i++) {
    result.push(Object.entries(tmp[i][0]));
    if (map2.contains(result[i][0][0])) {
      result[i][0].push(map2.get(result[i][0][0]));
    } else result[i][0].push(null);
  }
  return result.flat();
}

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

console.log(leftJoin(synonyms, antonyms));


module.exports = leftJoin;