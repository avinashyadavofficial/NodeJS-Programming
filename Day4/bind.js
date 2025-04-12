const student={
    name:"Avinash",
    hello(){
        console.log(`My name is ${this.name}`);
    }
}
setTimeout(student.hello,1000); //My name is undefined
//bcz this inside hello becomes window (or undefined in strict mode) when passed as a callback.

//using bind
setTimeout(student.hello.bind(student),1000);//My name is Avinash
//this is permanently fixed to student


//also bind :
const stud=student.hello.bind(student);
stud(); //My name is Avinash

