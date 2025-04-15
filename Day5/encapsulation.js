// Wrap data and methods that work on the data into one unit
// To hide internal details and only expose what’s necessary.
// Keeps your code organized, modular, and secure.
// Real Life: Your phone 
// You don’t see the wiring inside — just press buttons and use it.
function User(name, age) {
    let _age = age; // private variable using closure
  
    this.name = name;
  
    this.getAge = function() {
      return _age;
    };
  }
  const user1 = new User("Ravi", 28);
  console.log(user1.getAge()); // 28
  console.log(user1._age);     // undefined (hidden)
  
