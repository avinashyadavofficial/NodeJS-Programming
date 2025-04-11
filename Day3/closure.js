// A closure is when a function remembers the variables from its outer (lexical) scope,
//  even after that outer function has finished executing.

function outer(){
    let ct=0;
    function inner(){
        ct++;
        console.log(ct);
    }
    return inner;
}
const a=outer();
a(); //1
a(); //2
a(); //3
//Even though outer() is done executing, inner() still has access to count. That's the closure.

const b=outer();
b();//1

// Each call to outer() creates a new independent closure.
// this is how factories, state, hooks in React, and many libraries are built.

// for (var i = 0; i < 3; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, 1000);
//   }
// // 3 3 3

// for (let i = 0; i < 3; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, 1000);
//   }
// // 0 1 2

//Not a closure
// function sol(){
//     let a=0;
//     a++;
//     console.log(a);
// }
// const c=sol();
// console.log(c);


//Converted into closure
function sol() {
    let a = 0;

    return function () {
        a++;
        console.log(a);
    };
}

const c = sol();  // now c holds the inner function that has access to `a`
c(); // 1
c(); // 2
c(); // 3


//example
function createValue(){
    let val=100;
    return{
        get(){
            return val;
        },
        set(newVal){
            val=newVal;
        }   
    }
}
let obj=createValue();
console.log(obj.get());
obj.set(200);
console.log(obj.get());





