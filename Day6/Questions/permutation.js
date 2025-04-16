let arr = ["banana","abc"];
let ans = [];

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

for (let word of arr) {
    let freq = {};

    
    for (let char of word) {
        freq[char] = (freq[char] || 0) + 1;
    }

    let numerator = factorial(word.length); 
    let denominator = 1;

    
    for (let char in freq) {
        denominator *= factorial(freq[char]);
    }

    let permutations = numerator / denominator;
    ans.push(permutations);
}

console.log(...ans); 
