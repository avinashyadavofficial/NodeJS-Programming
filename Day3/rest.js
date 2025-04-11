//Rest parameters let you collect multiple arguments into a single array.
function sum(...numbers) {
    console.log(numbers); // an array
  }
sum(1,4,6,9);  //[ 1, 4, 6, 9 ]

//Only one rest parameter allowed per function.
//It must be the last parameter.

// function log(...args, message) {} // ❌ SyntaxError

const user = {
  name: "Alice",
  age: 30,
  location: "Wonderland",
  hobby: "Chess"
};

const { name, ...rest } = user;

console.log(name);
console.log(rest);

// Alice
// { age: 30, location: 'Wonderland', hobby: 'Chess' }

// Feature	Syntax	Meaning	Used In
// Rest	...args	Collect to array	Function params
// Spread	...arr	Expand from array	Function calls, arrays, objects

function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3)); // 6

function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3));       // 6
console.log(sum(5, 10, 15, 20)); // 50


function greet(first, ...others) {
  console.log("Hello", first);
  console.log("Other people:", others);
}

greet("A", "B", "C");
// Hello A
// Other people: ['B', 'C']


