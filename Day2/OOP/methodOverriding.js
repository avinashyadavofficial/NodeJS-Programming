// When a child object defines a method that has the same name as a method in its prototype (parent) —
// the child’s version is used.
const parent={
    greet(){
        console.log("Parent");
    }
}
const child =Object.create(parent);
child.greet=function(){
    console.log("Child");
}
child.greet(); //Child

//without overridden
const dog = {
    speak() {
      console.log("dog sound");
    }
  };
  
  const a= Object.create(dog);
  
  a.speak(); // dog sound


//to call parent even after overridden
const c={
    x(){
        console.log("Parent");
    }
}
const d=Object.create(c);
d.x=function(){
    console.log("Child");
    c.x.call(this);
}
d.x(); //Parent


//example
class Fruit{
     print(){
        console.log("Fruit");
    }
}
class Apple extends Fruit {
    print(){
        console.log("Apple");
        super.print();     //Fruit.print.call(this); // instead of writing this and static in parent class 
                                // we can use  super.print();

}
}
const ap=new Apple();
ap.print();
//Apple
//Fruit




  