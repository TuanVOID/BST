export interface Tree<E> {
    /**
     * Insert element e into the binary search tree.
     * Return true if the element is inserted successfully.
     */
    insert(e: E): boolean;
    /**
     * Inorder traversal from the root
     */
    inorder(): void;
    /**
     * Get the number of nodes in the tree
     */
    getSize(): number;
}
