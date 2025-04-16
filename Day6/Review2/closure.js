function outer(){
    let a=5;
    function inner(){
         a++;
         console.log(a);
    }
    return inner;
}
const a=outer();
a();
a();