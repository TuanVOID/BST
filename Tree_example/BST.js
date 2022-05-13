"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BST = void 0;
const Abstract_1 = require("./Abstract/Abstract");
const TreeNode_1 = require("./TreeNode");
class BST extends Abstract_1.AbstractTree {
    constructor() {
        super(...arguments);
        this.size = 0;
    }
    BST(objects) {
        for (let i = 0; i < objects.length; i++)
            this.insert(objects[i]);
    }
    createNewNode(e) {
        return new TreeNode_1.TreeNode(e);
    }
    insert(e) {
        if (this.root == null)
            this.root = this.createNewNode(e); /*create a new root*/
        else {
            /*locate the parent node*/
            let parent = null;
            let current = this.root;
            while (current != null) {
                if (e.localeCompare(current.element) < 0) {
                    parent = current;
                    current = current.left;
                }
                else if (e.localeCompare(current.element) > 0) {
                    parent = current;
                    current = current.right;
                }
                else
                    return false; /*Duplicate node not inserted*/
            }
            if (e.localeCompare(parent.element) < 0)
                parent.left = this.createNewNode(e);
            else
                parent.right = this.createNewNode(e);
        }
        this.size++;
        return true; /*element inserted successfully*/
    }
    getSize() {
        return this.size;
    }
    _inorder(root) {
        if (root == null)
            return;
        this._inorder(root.left);
        console.log(root.element + " ");
        this._inorder(root.right);
    }
    inorder() {
        this._inorder(this.root);
    }
}
exports.BST = BST;
//# sourceMappingURL=BST.js.map