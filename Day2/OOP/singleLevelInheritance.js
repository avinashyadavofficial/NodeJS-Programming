class Animal{
    breath(){
        console.log("breathing");
    }
}
class Dog extends Animal{
    barks(){
        console.log("barking");
    }
}
const d=new Dog();
d.breath(); //breathing
d.barks(); //barking

