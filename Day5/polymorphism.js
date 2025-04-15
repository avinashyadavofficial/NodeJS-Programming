// Same function name behaves differently in different classes.
//  Why?
// Makes code flexible and reusable.
//  Real Life: A person 
// Same person behaves differently at home, work, gym.

class Animal {
    speak() {
      console.log("Animal makes a sound");
    }
  }
  
  class Cat extends Animal {
    speak() {
      console.log("Meow");
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log("Woof");
    }
  }
  
  const a1 = new Cat();
  const a2 = new Dog();
  a1.speak(); // Meow
  a2.speak(); // Woof
  