// 1. Remove Elements That Appear More Than Once
// ✅ Problem:
// Given an array of integers, return a new array that only includes the elements that appear exactly once.

// 🟦 Input:
// [4, 5, 9, 4, 9, 6]

// 🟩 Output:
// [5, 6]

let arr=[4,5,9,4,9,6];
let mp=new Map();
for(let i of arr){
    if(mp.has(i)){
        mp.set(i,mp.get(i)+1);
    }
    else{
        mp.set(i,1);
    }
}
let ans=[];
for(let [key,val] of mp){
    if(val==1){
        ans.push(key);
    }
}
console.log(ans);