function groupByInitial(words) {
    return words.reduce((result, word) => {
        const initial = word[0].toLowerCase();
        if (!result[initial]) {
            result[initial] = [];
        }
        result[initial].push(word);
        return result;
    }, {});
}

console.log(groupByInitial(["apple", "ant", "banana", "blueberry", "carrot"]));
