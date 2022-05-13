"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeBinary = void 0;
var node_1 = require("./node");
var TreeBinary = /** @class */ (function () {
    function TreeBinary() {
        this.root = null;
        // co the dung this.root = new Node
    }
    // them 1 so
    TreeBinary.prototype.insertNode = function (data) {
        if (!this.root) { //khoi tao node moi va dat lam root
            var node = new node_1.Node(data);
            this.root = node;
            return this.root;
            // them 1 gia tri, so gia tri do voi nut goc, nho hon xep sang trai
        }
        else {
            var node = new node_1.Node(data);
            var currentNode = this.root;
            while (currentNode) { // cu di ve trai den khi gap null
                if (data < currentNode.data) {
                    if (!currentNode.left) {
                        currentNode.left = node;
                        break;
                    }
                    currentNode = currentNode.left; // cach tinh. tien' trong BST
                }
                else if (data > currentNode.data) { //trai khong co thi re sang phai
                    if (!currentNode.right) {
                        currentNode.right = node;
                        break;
                    }
                    currentNode = currentNode.right;
                }
            }
            return currentNode;
        }
    };
    TreeBinary.prototype.FindNodeParent = function (data) {
        var currentNode = this.root;
        var preNode = null; //them vao de lay gia tri parent tuy truong hop
        while (currentNode) {
            if (data == currentNode.data) {
                return currentNode;
            }
            else if (data < currentNode.data) {
                // preNode = currentNode;
                currentNode = currentNode.left;
            }
            else if (data > currentNode.data) {
                // preNode = currentNode
                currentNode = currentNode.right;
            }
        }
        return null;
    };
    TreeBinary.prototype.displayNode = function (data) {
        if (this.FindNodeParent(data)) {
            console.log("da tim thay");
        }
        else {
            console.log("khong tim thay");
        }
    };
    // delete (data:number) {
    //     // xoa node la
    //     let node = this.FindNodeParent(data)
    //     if (this.isNodeLa(node)) {
    //         node = null;
    //     }
    // }
    TreeBinary.prototype.isNodeLa = function (node) {
        return !node.left && !node.right;
    };
    return TreeBinary;
}());
exports.TreeBinary = TreeBinary;
