const word = "banana";
const f = n => n <= 1 ? 1 : n * f(n - 1);
const freq = [...word].reduce((m, c) => m.set(c, (m.get(c) || 0) + 1), new Map());
const den = [...freq.values()].reduce((a, v) => a * f(v), 1);
console.log(f(word.length) / den); // 60
