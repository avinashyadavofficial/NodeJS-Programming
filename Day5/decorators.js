function sayHello(name) {
    console.log(`Hello, ${name}`);
  }
  
  function decorator(func) {
    return function(name) {
      console.log("Decorator: Before original function");
      func(name);
      console.log("Decorator: After original function");
    };
  }
  
  const wrappedSayHello = decorator(sayHello);
  
  wrappedSayHello("Avinash");
  