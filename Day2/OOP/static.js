//A static method belongs to the class itself, not to the objects you create from it.
class MathUtil {
    static square(n) {
      return n * n;
    }
}
let a=new MathUtil();
// console.log(a.square(4));//a.square is not a function  
console.log(MathUtil.square(4)); //  16
  
class Car{
    constructor(model){
        this.model=model;
    }
     static compare(car1,car2){
        return car1.model===car2.model;
    }
}
const c1=new Car("BMW");
const c2=new Car("BMW");
// console.log(c1.compare(c2)); 
console.log(Car.compare(c1,c2));