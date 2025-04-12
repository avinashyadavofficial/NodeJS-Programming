function hello(greeting,time){
    console.log(`${greeting} : ${this.name}, See u at ${time} pm`);
}
const a={name:"Avinash"};
hello.apply(a,["Good Afternoon","6"]); //Good Afternoon : Avinash, See u at 6 pm

//same using call
hello.call(a,"Good evening","6"); //Good evening : Avinash, See u at  pm


//example 2

function sol(product,price){
    console.log(`the product is ${product} and price is ${price}`);
}
sol();//the product is undefined and price is undefined
sol("Watch",25);//the product is Watch and price is 25
sol.call(null,"bottle",10); //the product is bottle and price is 10
sol.apply(null,["phone",50000]);//the product is phone and price is 50000

