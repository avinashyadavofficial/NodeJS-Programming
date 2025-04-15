// One class (child) gets properties and methods from another class (parent).
// Why?
// Avoid code duplication.
// Build on existing functionality.

// Real Life: Family 
// A child inherits features from parents.

class Animal {
    speak() {
      console.log("Animal speaks");
    }
  }
  
  class Dog extends Animal {
    bark() {
      console.log("Woof!");
    }
  }
  
  const d = new Dog();
  d.speak(); // from Animal
  d.bark();  // from Dog
  