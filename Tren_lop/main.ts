import {TreeBinary} from "./TreeBinary";

let tree = new TreeBinary();

tree.insertNode(6)
tree.insertNode(5)
tree.insertNode(4)
tree.insertNode(7)
tree.insertNode(20)

// console.log(tree.FindNodeParent(7))
// tree.displayNode(21)
console.log(tree.FindNodeParent(7))
// console.log(tree.FindNodeParent(20))

// console.log(tree)