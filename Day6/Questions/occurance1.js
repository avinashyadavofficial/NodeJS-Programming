let str="banana";
let mp=new Map();
for(const ch of str){
    if(mp.has(ch)){
        mp.set(ch,mp.get(ch)+1);
    }
    else{
        mp.set(ch,1);
    }
}
function fact(n){
    if(n==0||n==1) return 1;
    return n*fact(n-1);
}
// let denominator=1;
// for(const val of mp.values()){
//     denominator*=fact(val);
// }

let denominator=[...mp.values()].reduce((acc,ele)=>acc*fact(ele),1);
let numerator=fact(str.length);
console.log(numerator/denominator);
