function sayHello(name) {
    console.log(`Hello, ${name}`);
  }
  
  function decorator(func) {
    return function(name) {
      console.log("Calling function...");
      func(name);
      console.log("Function call ended.");
    };
  }
  
  const decoratedHello = decorator(sayHello);
  
  decoratedHello("Avinash");
  