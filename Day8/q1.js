let arr = [2, 1, 2, 3, 4, 7, 8, 9, 6];
let pattern = [2, 1, 3, 8];

let ans = [];
let sans = [];

for (let i of pattern) {
    for (let j of arr) {
        if (j === i) {
            ans.push(j);
        }
    }
}
for (let j of arr) {
    if (!pattern.includes(j)) {
        sans.push(j);
    }
}

sans.sort((a, b) => a - b);

let result = ans.concat(sans);
console.log(result); // [2, 2, 1, 3, 8, 4, 6, 7, 9]
