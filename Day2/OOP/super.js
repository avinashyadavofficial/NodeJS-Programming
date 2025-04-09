class Vehicle{
    constructor(type){
        this.type=type;
    }
}
class Car extends Vehicle{
    constructor(type,brand){
        super(type);//calls vehicle constructor
        this.brand=brand;
    }
}
const c=new Car("Electric","Tata");
console.log(c); //Car { type: 'Electric', brand: 'Tata' }
console.log(c.type); //Electric
console.log(c.brand); //Tata

// u must call super() in child before using 'this'

class A{
    constructor(){
        this.value=1;
    }
}
class B extends A{
    constructor(){
        super();
        this.value=2;
    }
}
const b=new B();
console.log(b.value); //instance property
console.log(B.value);//undefined

//Note : if I comment constructor  from class B then the output of b.value will be 1;