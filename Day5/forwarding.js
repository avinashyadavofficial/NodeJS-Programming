function greet(greeting, name) {
    console.log(`${greeting}, ${name}`);
  }
  
  function logDecorator(fn) {
    return function(...args) {
      console.log("Calling with args:", args);
      return fn.apply(this, args); // forwarding
    };
  }
  
  const wrappedGreet = logDecorator(greet);
  
  wrappedGreet("Hi", "Avinash");
  