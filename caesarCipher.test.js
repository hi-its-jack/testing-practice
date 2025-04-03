import { caesarCipher } from "./caesarCipher.js";

test('caesarCipher shifts letters correctly', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
});

test('caesarCipher wraps from z to a correctly', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('caesarCipher preserves letter case', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('caesarCipher handles punctuation and spaces', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
