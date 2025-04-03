export const calculator = (a, b) => ({
    add: () => a + b,
    subtract: () => a - b,
    divide: () => b === 0 ? 'Cannot divide by zero' : a / b,
    multiply: () => a * b
});
