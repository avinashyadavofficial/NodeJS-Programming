// Same method name, different parameters — that’s overloading.
// Only the last defined func() will exist — it overwrites the previous one.
// so not supportable in JS

// We handle it manually using arguments:
function greet(name, age) {
    if (name && age) {
      console.log(`Hello ${name}, age ${age}`);
    } else if (name) {
      console.log(`Hello ${name}`);
    } else {
      console.log("Hello");
    }
  }
  
  greet();              // Hello
  greet("Avinash");        // Hello Avinash
  greet("Avinash", 21);    // Hello Avinash, age 21
  