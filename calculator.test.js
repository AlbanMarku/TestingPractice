/* eslint-disable no-undef */
import Calculator from "./calculator";

test("Addition", () => {
    expect(Calculator.add(2, 3)).toBe(5);
});

test("Subtract", () => {
    expect(Calculator.subtract(2, 3)).toBe(-1);
});

test("Divide", () => {
    expect(Calculator.divide(8, 4)).toBe(2);
});

test("Multiply", () => {
    expect(Calculator.multiply(0, 3)).toBe(0);
});
