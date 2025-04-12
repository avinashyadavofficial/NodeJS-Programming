//without call
function hello(){
    console.log(`Hello ${this.name}`);
}
hello();// hello undefined

//with call

const a={name:"Avinash"};
hello.call(a);//Hello Avinash


//example 2
function sol(msg){
    console.log(`${msg}, I am ${this.name}`);
}
const user={name:"Avi Yadav"};
sol.call(user,"helllooo"); //helllooo, I am Avi Yadav => use user as this and  hellloooo as msg


