let str="aaabbaadd";
let freq=[...str].reduce((acc,ele)=>acc.set(ele,(acc.get(ele)||0)+1),new Map);
console.log(freq);