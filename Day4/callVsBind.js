const student={
    name: "Avinash",
    hello(greeting){
        console.log(`${greeting}, I am ${this.name}`);
    }
};
student.hello("Good evening"); //Good evening, I am Avinash
//use call
const a={name:"Avi"};
student.hello.call(a,"Good afternoon");//Good afternoon, I am Avi

//use bind
const studBind=student.hello.bind(student,"Good morning");
studBind();//Good morning, I am Avinash

//use of call after binding
studBind.call(a,"Good afternoon"); //Good morning, I am Avinash

//one more example
const stud1Bind=student.hello.bind(student);
stud1Bind("Good Morning"); //Good Morning, I am Avinash

//now using call
stud1Bind.call(a,"Good afternoon"); //Good afternoon, I am Avinash

setTimeout(() => {
    stud1Bind.call(a, "Good night");
  }, 1000); //Good night, I am Avinash