//You have an object person = {name: "Avi"} and a function sayName() that logs this.name. 
// Use bind to make sure it always logs "Avi".
function sayName() {
    console.log(this.name);
}

const person = { name: "Avi" };

const a = sayName.bind(person);

a(); // Avi
