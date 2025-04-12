function logDecorator(func) {
    return function(...args) {
      console.log("Arguments:", args);
      return func.apply(this, args); // forwarding `this` and args
    };
  }
  
  const user = {
    name: "Avinash",
    sayHi(greeting) {
      console.log(`${greeting}, I am ${this.name}`);
    }
  };
  
  user.sayHi = logDecorator(user.sayHi);
  
  user.sayHi("Namaste");
  