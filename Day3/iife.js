//Immediately Invoked Function Expression
// It’s a function that is defined and executed immediately, without ever needing to call it separately.
(function () {
    console.log("Run immediately!");
})();

(() => {
    console.log("Arrow fun run");
})();

let name="Avinash";
(function (name) {
    console.log(`Hello, ${name}`);
  })(this.name);


(function () {
    let secret = "Hidden!";
    console.log("Inside IIFE:", secret);
  })();
  
  console.log(typeof secret); // undefined
  //secret is non accessible — no global pollution.

  var result = (function () {
    var x = 10;
    return x * x;
  })();
  
  console.log(result); // 100
  
  

// Create a private scope

// Avoid polluting the global namespace

// Useful in older JS (pre-modules)


const counter = (function () {
    // private variable here
    let a=0;
  
    return {
      increment() {
        a++;
        return a;
        // increase count
      },
      get() {
        return a;
        // return current count
      }
    };
  })();
  // Expected usage:
  console.log(counter.increment()); // 1
  console.log(counter.increment()); // 2
  console.log(counter.get());       // 2
//   counter is completely private — only accessible through the returned methods.
//   This is how data hiding was done before class #private fields!
  