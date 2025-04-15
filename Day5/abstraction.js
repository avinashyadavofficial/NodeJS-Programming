// Hiding complexity and only exposing necessary parts.
// Why?
// So users of your code don’t need to understand everything.
// Makes your interface clean and easy to use.

// 💡 Real Life: Car 
// You don’t need to know how the engine works — just how to use steering, gear, brake.
class Car {
    startEngine() {
      console.log("Engine started"); // hides internal complex work
    }
  }
  
  const myCar = new Car();
  myCar.startEngine(); 
  