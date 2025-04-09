const person={
    name: "Avinash",
    age:22,
    greet(){
        console.log(`Name is ${this.name} and age is ${this.age}`);
    }
};
person.greet(); 

//ES6 class Syntax (cleaner way)
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`Name is ${this.name} and age is ${this.age}`);
    }
}
const p=new Person("Avi",22);
p.greet();
console.log(p.address?.city);