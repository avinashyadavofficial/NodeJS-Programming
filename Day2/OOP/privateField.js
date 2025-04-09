class Person{
    #name="Avi";
    reveal(){
        return this.#name;
    }
}
const p=new Person();
// console.log(p.#name);//Private field '#name' must be declared in an enclosing class
console.log(p.reveal());
