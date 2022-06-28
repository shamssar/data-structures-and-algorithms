'use strict';
const Stack = require("../Stack/lib/stack");
function validateBrackets(str) {
    const stack = new Stack();
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
        stack.push(str[i]);
      } else if (str[i] === ')' || str[i] === ']' || str[i] === '}') {
        const bracket = stack.peek();
        if (
          (bracket === '(' && str[i] === ')') ||
          (bracket === '[' && str[i] === ']') ||
          (bracket === '{' && str[i] === '}')
        ) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
    if (stack.isEmpty()) {
      return true;
    } else {
      return false;
    }
  }
  
  module.exports = validateBrackets;