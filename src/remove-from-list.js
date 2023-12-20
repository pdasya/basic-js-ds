const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  // If the input linked list is empty, return null
  if (!l) {
    return null;
  }

  let emptyNode = new ListNode(); // Create a dummy node to serve as a new head
  emptyNode.next = l; // Set the next node of the dummy node to the input linked list

  let current = emptyNode;

  // Iterate through the linked list
  while (current.next) {
    // If the next node's value is equal to k, skip that node by bypassing it
    if (current.next.value === k) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return emptyNode.next; // Return the updated linked list without nodes containing the value k
}

module.exports = {
  removeKFromList
};
