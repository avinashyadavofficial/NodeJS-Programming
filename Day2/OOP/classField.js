// Declare properties directly inside the class
// Without needing to use the constructor

//using constructor
class Counter{
    constructor(){
        this.count=3;
    }
}
//class field
class Counte {
    count = 0; // ← class field!
}

//example
class Person {
    name="Raj";
    sayHi=()=>{
        console.log(`Hi from ${this.name}`);
    }
    print(){
        console.log(`Hi  ${this.name}`);
    }
}
  
  const p = new Person();
  const greet = p.sayHi;
  greet(); //Hi from Raj
  p.print();//Hi Raj
  const b=p.print;
  b(); //Cannot read properties of undefined (reading 'name')


  

  
  