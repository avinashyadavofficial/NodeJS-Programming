// 2. Group Strings by Length
// ✅ Problem:
// Write a function that takes an array of strings and groups them by their lengths.

// 🟦 Input:
// ["hi", "cat", "hat", "hello", "a"]

// 🟩 Output:

// {
//   1: ["a"],
//   2: ["hi"],
//   3: ["cat", "hat"],
//   5: ["hello"]
// }
let arr = ["hi", "cat", "hat", "hello", "a"];
let mp = new Map();

for (let str of arr) {
    let len = str.length;
    if (mp.has(len)) {
        mp.get(len).push(str);
    } else {
        mp.set(len, [str]);
    }
}

let grouped = Object.fromEntries(mp);
console.log(grouped);

