function areAllPositive(numbers) {
    return numbers.every(n => n > 0);
}

console.log(areAllPositive([1, 3, 5]));    // true
console.log(areAllPositive([1, -2, 3]));   // false
