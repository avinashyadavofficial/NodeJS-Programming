class A{
    x(){
        console.log("first");
    }
}
class B extends A{
    y(){
        console.log("second");
    }
}
class C extends B{
    z(){
        console.log("third");
    }
}
let cc=new C();
cc.x(); //first
cc.y(); //second
cc.z(); //third

