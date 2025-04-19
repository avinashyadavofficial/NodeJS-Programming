function countFrequencies(data) {
    return data.reduce((counter, item) => {
        counter[item] = (counter[item] || 0) + 1;
        return counter;
    }, {});
}

console.log(countFrequencies(["apple", "banana", "apple", "orange", "banana", "banana"]));
