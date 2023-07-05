export default class Optional<T> {
    private Value: T | undefined;
    private Assigned: boolean;

    constructor(value?: T) {
        if (value) {
            this.Value = value;
            this.Assigned = true;
        } else {
            this.Assigned = false;
        }
    }

    public HasValue(): boolean {
        return this.Assigned;
    }

    public GetValue(): T {
        if (!this.Assigned) {
            throw new Error();
        }

        return <T>this.Value;
    }
}