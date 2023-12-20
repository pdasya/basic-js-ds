const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor () {
    this.store = {}; 
    this.storeSize = 0;
  }
  push(element) {
    this.storeSize+=1; 
    this.store[this.storeSize] = element;
  }

  pop() {
    let removed = this.store[this.storeSize]; 
    delete this.store[this.storeSize];
    this.storeSize-=1; 
    return removed;
  }

  peek() {
    return this.store[this.storeSize];
  }
}

module.exports = {
  Stack
};
