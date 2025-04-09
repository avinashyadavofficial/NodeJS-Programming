// Every JavaScript object has a hidden property called [[Prototype]]
// (you can access it using . __proto__ or Object.getPrototypeOf())

// It points to another object — its prototype.

// When you try to access a property or method on an object:
// JS checks the object itself
// If not found, it looks up the prototype
// And again… until it hits the end of the chain → null

const a={
    name:"Avinash"
};
const b={
    age:25,
    __proto__:a
};
console.log(a.name); //Avinash
console.log(a.age);//undefined
console.log(b.name);//Avinash
console.log(b.age);//25

//Every function in JS has a .prototype property.
// function Person(name){
//     this.name=name;
// }
// Person.prototype.greet=function (){
//     console.log(`Hi ${this.name}`);
// };
// const p=new Person("Avi");
// p.greet(); //Hi Avi


// Classes = Syntactic Sugar
class Person{
    constructor(name) {
      this.name = name;
    }
  
    greet() {
      console.log("Hi " + this.name);
    }
}
const p=new Person("Avinash");
p.greet(); //Hi Avinash

//checking the chain
console.log(p.__proto__ === Person.prototype);         // true
console.log(Person.prototype.__proto__ === Object.prototype); // true

//example
const creature = { legs: 4 };
const dog = Object.create(creature);
dog.sound = "bark";
console.log(dog.legs); // 4

/*
Notes:
JS objects can inherit from other objects
. __proto__ is the actual link (though .prototype is what functions use to assign it)
You can create chains with Object.create() or via class/function constructors
*/

  
