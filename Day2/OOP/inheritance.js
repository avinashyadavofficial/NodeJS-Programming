//Inheritance lets one class reuse the properties & methods of another class.
class Animal{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(`${this.name} makes a noise`);
    }
}
class Dog extends Animal{
    speak(){
        console.log(`${this.name} barks`);
    }
}
let d=new Dog("aaa");
d.speak(); //aaa barks
console.log(d.name); //aaa
let a=new Animal("ddd");
a.speak(); // ddd makes a noise
console.log(a.name);//ddd
/*
Keyword	Meaning
extends	Makes the child class inherit from the parent
super()	Calls the parent constructor
super.method()	Call a parent method from child method
Overriding	Child class redefines a method from parent
*/
