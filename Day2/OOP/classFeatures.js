//constructor
class Person{
    constructor(name){
        this.name=name;
    }
    
    greet(){
        console.log(`name is ${this.name}`);
    }
}
let p=new Person("Avi");//constructor calls
p.greet();

//instance methods
class Name{
    greet(){
        console.log("Hello");
    }
}
let n=new Name();
n.greet();//Hello




