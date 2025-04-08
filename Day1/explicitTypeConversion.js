//Case 1:  To String
// 1. String(value)
console.log(String(123)); //"123"
console.log(String(true)); //"true"
console.log(String(null)); //"null"
console.log(String(undefined)); //"undefined"

//2. toString()
console.log((123).toString());     // "123"
console.log(true.toString());      // "true"
console.log([1,2].toString());     // "1,2"

//--------.toString() throws error on null and undefined---------

//Case 2: To Number
//1. Number(value)
console.log(Number("123"));       // 123
console.log(Number(true));        // 1
console.log(Number(false));       // 0
console.log(Number(null));        // 0
console.log(Number(undefined));   // NaN
console.log(Number("123abc"));    // NaN
console.log(Number("   42   "));  // 42 (trims spaces)
console.log(Number("   123Avi")); //NaN

//2. parseInt() and parseFloat()
console.log(parseInt("123Avinash")); //123
console.log(parseFloat("123.456")); //123.456
console.log(parseFloat("123.489567").toFixed(2));//123.49
console.log(parseInt("Avi123"));//NaN
console.log(parseFloat("123.45avi"));//123.45
console.log(parseInt("  15px")); //NaN

/* 
parseInt only reads until a non-digit
Number() tries to convert entire value
 */

// Case 3: To Boolean
console.log(Boolean(0)); // false
console.log(Boolean(""));       // false
console.log(Boolean(" "));      // true
console.log(Boolean([]));       // true
console.log(Boolean({}));       // true
console.log(Boolean(null));     // false
console.log(Boolean(undefined));// false
console.log(Boolean("false"));  // true (non-empty string!)

//Case 4: Unary + operator
//A simple short way to convert to number
console.log(+"42");//42
console.log(+true);//1
console.log(+false); //0
console.log(+null);//0
console.log(+undefined);//NaN





