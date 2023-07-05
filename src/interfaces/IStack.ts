import Optional from "../classes/Optional";

export default interface IStack<T> {
    Push(item: T): void;
    Pop(): T;
    Peek(): T | undefined;

    TryPop(): Optional<T>;
}