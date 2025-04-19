function rotateArray(data, k) {
    const length = data.length;
    const rotatePoint = k % length;
    return data.slice(-rotatePoint).concat(data.slice(0, length - rotatePoint));
}

console.log(rotateArray([10, 20, 30, 40, 50], 2));
