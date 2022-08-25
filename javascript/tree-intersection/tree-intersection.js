"use strict";

const HasTabe = require("../hash-table/hash-table");

const treeIntersection = (bt1, bt2) => {
  let resultArr = [];
  const hashmap = new HasTabe(1024);
  let btree1 = bt1.preOrder();
  let btree2 = bt2.preOrder();

  for (let index = 0; index < btree1.length; index++) {
    if (!hashmap.contain(btree1[index].toString())) {
      hashmap.set(btree1[index].toString(), btree1[index]);
    }
  }
  for (let index = 0; index < btree2.length; index++) {
    if (hashmap.contain(btree2[index].toString())) {
      resultArr.push(btree2[index]);
    }
  }

  return resultArr.length ? resultArr : "no common values";
};

module.exports = treeIntersection;