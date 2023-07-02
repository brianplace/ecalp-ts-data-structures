import IStack from '../interfaces/IStack';

export default class Stack<T> implements IStack<T> {
    private TopMostNode: StackNode<T> | undefined;

    public Push(item: T): void {
        const newNode: StackNode<T> = new StackNode<T>(item, this.TopMostNode);
        this.TopMostNode = newNode;
    }

    public Pop(): T {
        if (this.TopMostNode !== undefined) {
            const nodeToRemove: StackNode<T> = this.TopMostNode;
            const returnValue = nodeToRemove.Value;
            this.TopMostNode = nodeToRemove.PreviousNode;

            return returnValue;
        }

        throw new Error();
    }
}

class StackNode<T> {
    public Value: T;
    public PreviousNode: StackNode<T> | undefined;

    constructor(itemToAdd: T, previousNode: StackNode<T> | undefined) {
        this.Value = itemToAdd;
        this.PreviousNode = previousNode;
    }
}