// function flattenDeep(arr) {
//     return arr.flatMap(item =>
//       Array.isArray(item) ? flattenDeep(item) : [item]
//     );
//   }
  
//   const arrayND = [ [ [1, 2], [3, [4]] ], [ [5], [6, [7, 8]] ] ];
  
//   const flat = flattenDeep(arrayND);
//   console.log(flat); // [1, 2, 3, 4, 5, 6, 7, 8]

function flatMapDeep(arr,fun){
    // let ans=arr.flatMap(ele=>
    //     Array.isArray(ele)?flatMapDeep(ele,fun):[fun(ele)]
    // )
    // return ans;

    //u can also write like this
    return arr.flatMap(ele=>
        Array.isArray(ele)?flatMapDeep(ele,fun):[fun(ele)]
    )
}
// function double(x){
//     return x*2;
// }
const arr=[ [ [1, 2], [3, [4]] ], [ [5], [6, [7, 8]] ] ];
// console.log(flatMapDeep(arr,double));
// in place of defining double a function we can directly assign while printing
console.log(flatMapDeep(arr,a=>a*2));

  
const arr1=[1,2,[3,4]];
let ans=arr1.flatMap(a=>a);
console.log(ans);
let ans1 = arr1.flatMap(a => Array.isArray(a) ? a.map(x => x * 10) : [a * 10]);
console.log(ans1)