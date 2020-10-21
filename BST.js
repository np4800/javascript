console.log('--- Binary Search Tree ---');
class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }

}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    //creating a node and initializing with data
    var newNode = new Node(data);

    //check if the node provided is root node or null by checking if it null or not
    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root,newNode);
    }
  }

  insertNode(node, newNode) {
    if (node.data > newNode.data) {
      // check if the node.left is null or not and then assing the new node to the left of the passed node
      if (node.left === null) {
        node.left = newNode
      } else {
        // if the node.left is not null then reccur this untill the left of the of the node is found to be null when you pass the element
        this.insertNode(node.left,newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right,newNode);
      }
    }
  }

  getRootNode() {
    return this.root;
  }

  inorder(node) {
      if(node.left != null) {
        this.inorder(node.left);
      }
      console.log(node.data);
      if(node.right != null) {
        this.inorder(node.right)
      }
  }

  preorder(node) {
    if (node != null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  postorder(node) {
    if (node != null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root,data);
  }

  removeNode(node,key) {
    // if the root is null then the tree is empty
    if (this.root === null) {
      return null;
    } else if (key < node.data) {
      node.left = this.removeNode(node.left,key)
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right,key);
      return node;
    } else {
      if (node.left == null && node.right == null) {
        node = null;
        return null;
      }

      if (node.left == null) {
        node = node.right
        return node;
      }

      if (node.right == null) {
        node = node.left;
        return node;
      }

      var aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right=this.removeNode(node.right, aux.data);
      return node;
    }
   }

}

//main section
var BST = new BinarySearchTree;
// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17

var root = BST.getRootNode();
console.log(root);
console.log('--InOrder--');
BST.inorder(root);
console.log('--PreOrder--');
BST.preorder(root);
console.log('--PostOrder--');
BST.postorder(root);
console.log('--Find Min Node--');
console.log(BST.findMinNode(root));
console.log('--Remove Node--');
BST.remove(15);
BST.inorder(root);
