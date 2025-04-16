const a={
    name:"Avinash",
    greet(){
       console.log(this.name);
    }
}
const b={name:"rahul"};
a.greet.call(b);
