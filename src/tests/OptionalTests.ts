import { expect } from 'chai';
import Optional from '../classes/Optional';

describe('Optional tests', () => {
    it('creating with a value has HasValue true', () => {
        const optional: Optional<number> = new Optional<number>(5);
        expect(optional.HasValue()).to.be.true;
    });

    it('creating with a value has GetValue return same value', () => {
        const optionalValue: number = 5;
        const optional: Optional<number> = new Optional<number>(optionalValue);
        expect(optional.HasValue()).to.be.true;
        expect(optional.GetValue()).to.equal(optionalValue);
    });

    it('creating without a value has HasValue false', () => {
        const optional: Optional<number> = new Optional<number>();
        expect(optional.HasValue()).to.be.false;
    });

    it('creating without a value has GetValue throws an error', () => {
        const optional: Optional<number> = new Optional<number>();
        expect(optional.HasValue()).to.be.false;
        expect(() => optional.GetValue()).to.throw();
    });
});