//Logical & Nullish Coalescing Operators

//1. Logical OR (||)
//Returns the first truthy value, or last one if all are falsy
//Used often for default values
let name = "" || "Guest";
console.log(name); // "Guest"

let a="" || null;
console.log(a); //null

//2. Logical AND (&&)
//Returns the first falsy value, or last one if all are truthy
let user = "Alice" && "Logged In";
console.log(user); // "Logged In"

let user1 = null && "Logged In";
console.log(user1); // null

// 3. Logical NOT (!)
//Converts value to boolean and negates it
console.log(!true); //false
console.log(!0);//true
console.log(!!"hello");//true

//4 .Nullish Coalescing (??)
//Returns value1 if it’s not null/undefined
//Otherwise returns value2
let username = null ?? "Avi";
console.log(username); // "Avi"

let count = 0 ?? 10;
console.log(count); // 0  (nullish doesn't treat 0 as falsy!)

//examples
console.log(null || undefined || "foo");//foo
console.log(false && "hello" && 0);//false
console.log("" || 0 || false);//false
console.log(1 ?? 2 ?? 3);//1
console.log(0 && "zero");//0
console.log(true && 42);//42
console.log(undefined ?? "default" ?? "fallback");//default
console.log("hello" && 0 || "world");//world
console.log(0 ?? "" ?? "fallback");//0






