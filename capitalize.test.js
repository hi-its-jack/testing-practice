import { capitalize } from "./capitalize.js";

test('capitalize capitalizes the first letter of each word', () => {
    expect(capitalize('hello world')).toBe('Hello World');
});

test('capitalize handles single-word strings', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('capitalize handles an already capitalized string', () => {
    expect(capitalize('Hello World')).toBe('Hello World');
});

test('capitalize handles strings with mixed casing', () => {
    expect(capitalize('hElLo WoRLd')).toBe('Hello World');
});
