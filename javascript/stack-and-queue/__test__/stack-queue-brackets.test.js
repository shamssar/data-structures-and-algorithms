'use strict';

const validateBrackets = require('../stack-queue-brackets/stack-queue-brackets');

describe('Stack-Queue-Brackets Tests', () => {
  test('Can successfully validate a balanced string', () => {
    const str = '{}';
    expect(validateBrackets(str)).toBe(true);
  });
  test('Can successfully validate a balanced string', () => {
    const str = '{}(){}';
    expect(validateBrackets(str)).toBe(true);
  });
  test('Can successfully validate a balanced string', () => {
    const str = '()[[Extra Characters]]';
    expect(validateBrackets(str)).toBe(true);
  });
  test('Can successfully validate a balanced string', () => {
    const str = '(){}[[]]';
    expect(validateBrackets(str)).toBe(true);
  });
  test('Can successfully validate a balanced string', () => {
    const str = '{}{Code}[Fellows](())';
    expect(validateBrackets(str)).toBe(true);
  });
  test('Can successfully invalidate an unbalanced string', () => {
    const str = '[({}]';
    expect(validateBrackets(str)).toBe(false);
  });
  test('Can successfully invalidate an unbalanced string', () => {
    const str = '(](';
    expect(validateBrackets(str)).toBe(false);
  });
  test('Can successfully invalidate an unbalanced string', () => {
    const str = '{(})';
    expect(validateBrackets(str)).toBe(false);
  });
});