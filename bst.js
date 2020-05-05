class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  insertRec(root, value) {
    if(root === null) {
      root = new Node(value);
      return root;
    }

    if(value <= root.value) {
      //go left
      root.left = this.insertRec(root.left, value);
    } else {
      //go right
      root.right = this.insertRec(root.right, value);
    }

    return root;
  }

  insert(value){
    //Code here
    this.root = this.insertRec(this.root, value);
  }
  lookup(value){
    //Code here
  }
  // remove
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(JSON.stringify(traverse(tree.root)));

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  console.log('node', node);
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
