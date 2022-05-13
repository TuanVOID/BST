"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BST_1 = require("./BST");
let tree = new BST_1.BST();
tree.insert("George");
tree.insert("Michael");
tree.insert("Tom");
tree.insert("Adam");
tree.insert("Jones");
tree.insert("Peter");
tree.insert("Daniel");
//traverse tree
console.log("Inorder (sorted): ");
tree.inorder();
console.log("The number of nodes is: " + tree.getSize());
//# sourceMappingURL=TestBST.js.map