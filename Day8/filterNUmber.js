function filterAboveAverage(numbers) {
    const average = numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
    return numbers.filter(num => num > average);
}

console.log(filterAboveAverage([10, 20, 30, 40, 50]));
