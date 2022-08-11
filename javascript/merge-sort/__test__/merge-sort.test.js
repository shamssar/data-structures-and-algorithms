'use strict';

const mergeSort = require('../merge-sort');

describe('Testing the mergeSort function', () => {
  it('should sort the example array', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    mergeSort(arr);
    let result = arr;
    expect(result).toEqual([4, 8, 15, 16, 23, 42]);
  });
  it('should sort a reverse sorted array', () => {
    let arr = [20, 18, 12, 8, 5, -2];
    mergeSort(arr);
    let result = arr;

    expect(result).toEqual([-2, 5, 8, 12, 18, 20]);
  });
  it('should sort a few uniques array', () => {
    let arr = [5, 12, 7, 5, 5, 7];
    mergeSort(arr);
    let result = arr;

    expect(result).toEqual([5, 5, 5, 7, 7, 12]);
  });
  it('should sort a nearly-sorted array', () => {
    let arr = [2, 3, 5, 7, 13, 11];
    mergeSort(arr);
    let result = arr;

    expect(result).toEqual([2, 3, 5, 7, 11, 13]);
  });
  it('should sort an array with an odd number of values', () => {
    let arr = [8, 3, 5, 13, 11];
    mergeSort(arr);
    let result = arr;

    expect(result).toEqual([3, 5, 8, 11, 13]);
  });
});