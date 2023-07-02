import { expect } from 'chai';
import IStack from '../interfaces/IStack';
import Stack from '../classes/Stack';

describe('Stack tests', () => {
    it('passes basic test', () => {
        const stack: IStack<number> = new Stack<number>();
        expect(1).to.equal(1);
    });

    it('can push item onto new stack', () => {
        const stack: IStack<number> = new Stack<number>();
        expect(() => stack.Push(1)).to.not.throw();
    });

    it('after pushing item onto new stack, pop returns same item', () => {
        const stack: IStack<number> = new Stack<number>();
        const valueToAdd: number = 1;
        stack.Push(valueToAdd);
        let valueToReturn: number = -1;
        expect(() => valueToReturn = stack.Pop()).to.not.throw();
        expect(valueToAdd).to.equal(valueToReturn);
    });

    it('calling pop on new stack throws error', () => {
        const stack: IStack<number> = new Stack<number>();
        expect(() => stack.Pop()).to.throw(); 
    });

    it('can call pop however many times push is called', () => {
        const stack: IStack<number> = new Stack<number>();
        const testArray: number[] = [1, 2, 3, 4, 5];
        const lengthOfArray: number = testArray.length;

        for (let index = 0; index < lengthOfArray; index++) {
            stack.Push(testArray[index]);
        }

        let popCount: number = 0;

        let keepCallingPop = true;

        while (keepCallingPop) {
            try {
                const valueToReturn = stack.Pop();
                popCount++;
            } catch {
                keepCallingPop = false;
            }
        }

        expect(lengthOfArray).to.equal(popCount);
    });

    it('calling pop on array returns an array in reverse order', () => {
        const stack: IStack<number> = new Stack<number>();
        const testArray: number[] = [1, 2, 3, 4, 5];
        const lengthOfArray: number = testArray.length;

        for (let index = 0; index < lengthOfArray; index++) {
            stack.Push(testArray[index]);
        }

        const returnArray: number[] = []

        let keepCallingPop = true;

        while (keepCallingPop) {
            try {
                returnArray.push(stack.Pop());
            } catch {
                keepCallingPop = false;
            }
        }

        expect(lengthOfArray).to.equal(returnArray.length);

        for (let index = 0; index < lengthOfArray; index++) {
            expect(testArray[index]).to.equal(returnArray[(lengthOfArray - 1) - index]);
        }

    });
});