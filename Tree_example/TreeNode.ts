export class TreeNode<E> {
    public element: E;
    public left: TreeNode<E>;
    public right: TreeNode<E>;

    constructor(e: E) {
        this.element = e;
    }
}
