import { expect, test } from 'vitest';
import {Checker}  from './checker';

test("marks 'cheese is ' as correct", () => {
    const checker = new Checker('cheese is');

    ["c", "h", "e", "e", "s","e", " ", "i", "s"].forEach((char, index) => {
        const result = checker.check(char, index);
        expect(result).toBe(true);
    });
});