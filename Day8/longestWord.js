function getLongestWord(wordList) {
    return wordList.reduce((longest, current) => 
        current.length > longest.length ? current : longest
    , "");
}

console.log(getLongestWord(["apple", "pineapple", "grape", "strawberry"]));
