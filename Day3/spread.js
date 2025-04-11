// Spread syntax is the opposite of rest — it lets you expand arrays or 
// objects into individual elements.

const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; 
console.log(arr2); // [1, 2, 3, 4]
//use cases: merging Arrays, cloning objects, passing arguments to function

function sol(a,b,c){
    console.log(a,b,c);
}
const val=[1,4,7];
sol(...val);//1 4 7

const a = { x: 1 };
const b = { y: 2 };
const c = { ...a, ...b }; 
console.log(c);// { x: 1, y: 2 }


