import { reverseString } from "./reverseString.js";

test('reverseString reverses the string correctly', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('reverseString handles empty strings', () => {
    expect(reverseString('')).toBe('');
});

test('reverseString handles single-character strings', () => {
    expect(reverseString('a')).toBe('a');
});

test('reverseString handles strings with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
});
