import { calculator } from "./calculator.js";

test('calculator adds two numbers', () => {
    expect(calculator(2, 3).add()).toBe(5);
});

test('calculator subtracts two numbers', () => {
    expect(calculator(5, 3).subtract()).toBe(2);
});

test('calculator multiplies two numbers', () => {
    expect(calculator(2, 3).multiply()).toBe(6);
});

test('calculator divides two numbers', () => {
    expect(calculator(6, 3).divide()).toBe(2);
});

test('calculator returns an error message when dividing by zero', () => {
    expect(calculator(6, 0).divide()).toBe('Cannot divide by zero');
});
