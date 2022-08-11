'use strict';

function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i = i + 1;
    } else {
      arr[k] = right[j];
      j = j + 1;
    }
    k = k + 1;
  }

  if (i === left.length) {
    for (k; k < arr.length; k++) {
      arr[k] = right[j];
      j = j + 1;
    }
  } else {
    for (k; k < arr.length; k++) {
      arr[k] = left[i];
      i = i + 1;
    }
  }
}

function mergeSort(arr) {
  const n = arr.length;
  if (n > 1) {
    let mid = Math.trunc(n / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, n);

    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  }
}
let arr = [8, 4, 23, 42, 16, 15];
mergeSort(arr);
console.log(arr);

module.exports = mergeSort;