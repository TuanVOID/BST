import {Tree} from "../Interface/Interface";

export abstract class AbstractTree<E> implements Tree<E> {
    getSize(): number {
        return 0;
    }

    inorder(): void {
    }

    insert(e: E): boolean {
        return false;
    }
}