// const { d = console.log("hey") } = { d: 2 };
// // Does not log anything, because `b` is defined and there's no need
// // to evaluate the default value.

// console.log(d);//2
// const { e = console.log("hey") } = { e: undefined}; //hey


// const [a = 1] = []; // a is 1
// const { b = 2 } = { b: undefined }; // b is 2
// const { c = 2 } = { c: null }; // c is null
// console.log(a);//1
// console.log(b);//2
// console.log(c);//null



// const [f, g, ...{ length }] = [4, 2, 3];
// console.log(f, g, length); // 4 2 1

// const [a, b, ...[c, d]] = [1, 2, 3, 4];
// console.log(a, b, c, d); // 1 2 3 4

// const [a, b, ...[c, d, ...[e, f]]] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, c, d, e, f); // 1 2 3 4 5 6

// const { a, ...{ b } } = { a: 1, b: 2 };
// // SyntaxError: `...` must be followed by an identifier in declaration contexts

// let a, b;
// ({ a, ...{ b } } = { a: 1, b: 2 });
// // SyntaxError: `...` must be followed by an assignable reference in assignment contexts

// const[a,b]=new Map([
//     [1,2],
//     [3,4],
// ]);
// console.log(a,b);//[1,2][3,4]

// const { a: aa = 10, b: bb = 5 } = { a: 3 };

// console.log(aa); // 3
// console.log(bb); // 5





