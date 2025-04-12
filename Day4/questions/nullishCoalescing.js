// Write a function "safeReturn" that takes a value and returns it unless it's null or undefined, 
// then return "Default".
function safeReturn(val){
   return val ?? "default";
}
console.log(safeReturn("hello"));
console.log(safeReturn(null));
console.log(safeReturn(undefined))

function nullishCode(a,b){
    return a??b;
}
console.log(nullishCode("hi","a")); //hi
console.log(nullishCode(null,"hello")); //hello
console.log(nullishCode(undefined,"hi"));//hi   