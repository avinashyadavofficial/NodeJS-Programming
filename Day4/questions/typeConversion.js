let a="10";
let b=5;
// function sum(a,b){
//     return Number(a)+Number(b);
// }
function sum(...arr) {
    return arr.reduce((acc, val) => acc + Number(val), 0);
}


console.log(sum(a,b));//15

let arr=["10",4,5,"7",2];
console.log(sum(...arr)); //28

