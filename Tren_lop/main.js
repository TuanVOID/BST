"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TreeBinary_1 = require("./TreeBinary");
var tree = new TreeBinary_1.TreeBinary();
tree.insertNode(6);
tree.insertNode(5);
tree.insertNode(4);
tree.insertNode(7);
tree.insertNode(20);
// console.log(tree.FindNodeParent(7))
// tree.displayNode(21)
console.log(tree.FindNodeParent(7));
// console.log(tree.FindNodeParent(20))
// console.log(tree)
