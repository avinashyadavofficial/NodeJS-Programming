function hello(name){
    console.log(`hello ${name}`);
}
function decorator(func){
    return function(...args){
        console.log("func is going to run");
        return func(...args);
    };
}

const a=decorator(hello);
a("Avinash");