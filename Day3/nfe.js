//Named Function Expression
//A Named Function Expression (NFE) is a function expression where the function has a name, 
// even though it's assigned to a variable.

const sayHi = function greet() {
    console.log("Hello!");
  };
sayHi();

let factorial=function fact(n){
    if(n==1){
        return 1;
    }
    return n*fact(n-1);
}
console.log(factorial(5));

const greet = function sayHello() {
    console.log(typeof sayHello); //function
  };
  
  greet();           
  console.log(typeof sayHello); // undefined
  console.log(typeof greet);//function


  const sayHi1 = function greet1(name) {
    if (name) {
      console.log(`Hi, ${name}!`);
    } else {
      greet1("Code Ninja");
    }
  };
  
  const greet1 = "Shadowed!";
  
  sayHi1(); // Hi, Code Ninja
  
  
  
