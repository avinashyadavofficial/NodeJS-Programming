function checkFalse(val){
    return Boolean(val)?"truthy":"falsy";
}
console.log(checkFalse("")); //falsy
console.log(checkFalse("hello")); //truthy
