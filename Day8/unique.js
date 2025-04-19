function getUniqueElements(arr1, arr2) {
    const combined = [...arr1, ...arr2];
    const unique = combined.filter((item, idx) => combined.indexOf(item) === idx);
    return unique;
}

console.log(getUniqueElements([1, 3, 5], [3, 5, 7, 9]));
