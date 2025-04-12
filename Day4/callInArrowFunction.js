//.call() doesn’t work with arrow functions the same way — 
// because arrow functions don’t have their own this.
const stud={
    name:"Avi",
    hello:()=>{
        console.log(`Hi ${this.name}`);
    }
};
stud.hello(); //Hi Undefined
console.log(stud.name);//Avi
const user={name:"Avinash "};
stud.hello.call(user);//Hi undefined


