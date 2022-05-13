import {AbstractTree} from "./Abstract/Abstract";
import {TreeNode} from "./TreeNode";

export class BST<E> extends AbstractTree<E> {
    protected root: TreeNode<E>;
    protected size: number = 0;

    public BST(objects: E[]) {
        for (let i = 0; i < objects.length; i++)
            this.insert(objects[i]);
    }

    protected createNewNode(e: E): TreeNode<E> {
        return new TreeNode(e);
    }

    public insert(e): boolean {
        if (this.root == null)
            this.root = this.createNewNode(e); /*create a new root*/
        else {
            /*locate the parent node*/
            let parent: TreeNode<E> = null;
            let current: TreeNode<E> = this.root;
            while (current != null) {
                if (e.localeCompare(current.element) < 0) {
                    parent = current;
                    current = current.left;
                } else if (e.localeCompare(current.element) > 0) {
                    parent = current;
                    current = current.right;
                } else
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

    public getSize(): number {
        return this.size;
    }

    protected _inorder(root: TreeNode<E>): void {
        if (root == null) return;

        this._inorder(root.left);

        console.log(root.element + " ");

        this._inorder(root.right);

    }

    public inorder(): void {
        this._inorder(this.root);
    }
}