// 3. Sort Numbers by Frequency
// ✅ Problem:
// Given an array of numbers, sort it in ascending order of frequency.
// If two numbers have the same frequency, sort them in descending numeric order.

// 🟦 Input:
// [4, 5, 6, 5, 4, 3]

// 🟩 Output:
// [6,3, 5, 5, 4, 4]
let arr=[4, 5, 6, 5, 4, 3];
let mp=new Map();
for(let i of arr){
    mp.set(i,(mp.get(i)||0)+1);
}
arr.sort((a,b)=>{
    let fa=mp.get(a);
    let fb=mp.get(b);
    if(fa===fb){
        return b-a;
    }
    else{
        return fa-fb;
    }
});
console.log(arr);