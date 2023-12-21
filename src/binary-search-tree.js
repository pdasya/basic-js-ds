const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary  search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null; 
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addToTree(this.rootNode, data);

    function addToTree(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (data === node.data) {
        return node;
      }

      if (data < node.data) {
        node.left = addToTree(node.left, data);
      } else {
        node.right = addToTree(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searchInTree(this.rootNode, data); 

    function searchInTree(node, data) {
      if (!node) {
        return false; 
      }

      if (node.data === data) {
        return true; 
      }

      return data < node.data ? 
      searchInTree(node.left, data) :
      searchInTree(node.right, data);
    }
    

  }

  find(data) {
    return findInTree(this.rootNode, data);

    function findInTree(node, data) {
      if (!node) {
        return null; 
      }

      if (data === node.data) {
        return node; 
      }

      if (data < node.data) {
        return findInTree(node.left, data); 
      } else {
        return findInTree(node.right, data);
      }
    }
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data); 

    function removeNode(node, data) {
      if (!node) {
        return null; 
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data); 
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right; 
          return node; 
        }

        if (!node.right) {
          node = node.left; 
          return node; 
        }

        let minRight = node.right; 
        while (minRight.left) {
          minRight = minRight.left; 
        }

        node.data = minRight.data; 
        node.right = removeNode(node.right, minRight.data); 

        return node; 
      }
    }
  }

  min() {
    if (!this.rootNode) {
      return;
    }

    let node = this.rootNode;
    while (node.left) {
      node = node.left; 
    }

    return node.data; 
  }

  max() {
    if (!this.rootNode) {
      return;
    }

    let node = this.rootNode;
    while (node.right) {
      node = node.right; 
    }

    return node.data; 
  }
}

module.exports = {
  BinarySearchTree
};