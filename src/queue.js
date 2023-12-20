const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.store = {};
    this.begin = 0; 
    this.end = 0; 
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    this.store[this.end] = value; 
    this.end+=1; 
  }

  dequeue() {
    let removed = this.store[this.begin];
    delete this.store[this.begin]; 
    this.begin+=1; 
    return removed;
  }
}

module.exports = {
  Queue
};
