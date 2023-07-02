export default interface IStack<T> {
    Push(item: T): void;
    Pop(): T;
}