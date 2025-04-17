let a=Symbol("emoji");
let person = {  
    1: 'Avinash',  
    age: 30,
    "full name": "Avinash Yadav",
    [a]:"hello"     
}; 
console.log(person);
for(let i of Object.keys(person)){
    console.log(typeof i);
}

for (let key of Reflect.ownKeys(person)) {
    console.log(key, typeof key);
}


