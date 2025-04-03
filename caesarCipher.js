export const caesarCipher = (str, num) => {
    return str.split("").map(char => {
        if (char.match(/a-z/i)) {
            let code = char.charCodeAt(0);
            let base = char === char.toUpperCase() ? 65 : 97;
            return String.fromCharCode(((code - base + num) % 26 + 26) % 26 + base);
        }
        return char;
    }).join(""); // Return the transformed string
};
