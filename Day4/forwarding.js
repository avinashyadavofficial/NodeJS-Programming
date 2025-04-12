// Original function
function greet(message) {
    console.log(`${message}, I'm ${this.name}`);
  }
  
  // Decorator function that forwards everything
  function logDecorator(func) {
    return function (...args) {
      console.log("Calling function with args:", args);
      return func.apply(this, args); // forward 'this' and args
    };
  }
  

  const user = {
    name: "Avi",
    sayHello: logDecorator(greet)
  };
  

  user.sayHello.call(user, "Hey");
  

  