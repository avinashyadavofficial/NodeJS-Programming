// 1. if, else if, else
let age = 20;

if (age >= 18) {
  console.log("Adult");
} else if (age > 12) {
  console.log("Teen");
} else {
  console.log("Kid");
}

//2. Truthy vs Falsy in Conditions
// Falsy Values : false, 0, "", null, undefined, NaN
if ("0") console.log("truthy"); // print
if (0) console.log("won't run"); //  not print

//3. ternary
let isOnline=true;
let status=isOnline?"Online":"Offline";
console.log(status);//Online

//4. switch statement
let a=9;
switch(true){
    case a>5:
        console.log("greater than 5");
        break;
    case a<0:
        console.log("less than 0");
        break;
    default:
        console.log("less than 5 but greater than 0");

}







