export const analyzeArray = (arr) => ({
    average: () => arr.reduce((acc, el) => acc += el, 0) / arr.length,
    min: () => Math.min(...arr),
    max: () => Math.max(...arr),
    length: () => arr.length
});
