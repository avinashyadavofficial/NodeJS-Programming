function getCommonElements(arr1, arr2) {
    const setB = new Set(arr2);
    return arr1.filter(item => setB.has(item));
}

console.log(getCommonElements([2, 4, 6, 8], [4, 6, 10, 12]));
