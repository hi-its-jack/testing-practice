import { analyzeArray } from "./analyzeArray.js";

test('analyzeArray returns the correct statistics for the array', () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(result.average()).toBe(4);  // Call the function to get the value
  expect(result.min()).toBe(1);      // Call the function to get the value
  expect(result.max()).toBe(8);      // Call the function to get the value
  expect(result.length()).toBe(6);   // Call the function to get the value
});

test('analyzeArray handles an array with one element', () => {
  const result = analyzeArray([5]);
  expect(result.average()).toBe(5);  // Call the function to get the value
  expect(result.min()).toBe(5);      // Call the function to get the value
  expect(result.max()).toBe(5);      // Call the function to get the value
  expect(result.length()).toBe(1);   // Call the function to get the value
});

test('analyzeArray handles an empty array', () => {
  const result = analyzeArray([]);
  expect(result.average()).toBeNaN();         // Calling function, expect NaN for average
  expect(result.min()).toBe(Infinity);       // Calling function, expect Infinity for min
  expect(result.max()).toBe(-Infinity);      // Calling function, expect -Infinity for max
  expect(result.length()).toBe(0);           // Calling function, expect 0 for length
});
