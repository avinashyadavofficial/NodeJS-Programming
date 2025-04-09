//One class inherits from more than one parent
//not possible directly bcz of diamond problem
/*
so  we use mixins
Mixins = Reusable Behaviors (objects/functions)
We inject them into a class.
 */
const canEat = {
    eat() {
        console.log("Eating");
    }
}
const canSleep={
    sleep(){
        console.log("Sleeping");
    }
}
class Person{
    walk(){
        console.log("walking");
    }
}
Object.assign(Person.prototype,canEat,canSleep);
//Object.assign() copies methods into the class prototype

const p=new Person();
p.eat();//Eating
p.sleep();//Sleeping
p.walk();//walking


