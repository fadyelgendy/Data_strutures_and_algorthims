import BinarySearchTree from "../data_structures/BinarySearchTree.js"

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

// console.log(tree.bfs());
console.log(tree.dfsPreorder());
console.log(tree.dfsPostoder());
console.log(tree.dfsInorder());