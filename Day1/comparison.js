/*
Operator	Meaning
==	Equal (loose)
!=	Not equal (loose)
===	Equal (strict)
!==	Not equal (strict)
>	Greater than
<	Less than
>=	Greater or equal
<=	Less or equal
 */

// 1. == vs === (Loose vs Strict Equality)
// == → converts types before comparing
console.log("5"==5);//true
console.log(0==false);//true
console.log(null==undefined);//true

//=== → checks both value and type
console.log("5"===5);//false
console.log(0===false);//false
console.log(null===undefined);//false

// 2. null and undefined
console.log(null==undefined);//true
console.log(null===undefined);//false
console.log(null==0);//false
console.log(undefined==0);//false

//3. NaN
console.log(NaN==NaN);//false
console.log(NaN===NaN);//false
console.log(isNaN(NaN));//true

//4.String and Lexical
console.log("apple">"banana");//false
console.log("12">"2"); //false
console.log("a"<"A");//false
console.log("A"<"a");//true
console.log("apple">"Apple");//true

//5. Boolean in Comparisons
console.log(true==1);//true
console.log(false==0);//true
console.log(true===1);//false


//example
// When using ==, JavaScript doesn't compare the truthiness,
//  it tries to coerce both values to a common type, often numbers.

console.log("0"==false);//true
//so here "0" converts to 0 and false convert to 0 so 0===0 becomes true
console.log(false=="0");//true


console.log(null>=0);//true

console.log([] == ![]);//true




