function personDetails(){
    console.log(`${this.name} is ${this.age} years old.`);
}
const user1={name: "Avi", age:21};
const user2={name: "Rahul", age: 23};
personDetails.call(user1);
personDetails.call(user2);


// example 2
const student={
    name:"Avi",
    hello:function(){
        console.log(`Hi ${this.name}`);
    }
}
const user={name:"Avinashh"};
student.hello();//Hi Avi
student.hello.call(user); //Hi Avinash

//.call() lets you borrow a method from one object and use it with another.