class A{
    x(){
        console.log("first");
    }
}
class B extends A{
    y(){
        console.log("it is a y");
    }
}
class C extends A{
    z(){
        console.log("it is a z");
    }
}
const bb=new B();
bb.x(); //first
bb.y();//it is a y
const cc= new C();
cc.x();//first
cc.z(); // it is a z
