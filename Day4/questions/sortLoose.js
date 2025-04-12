let arr=[1,"2",4,"3"];
function looseSort(arr){
    return arr.sort((a,b)=>Number(a)-Number(b));
}
console.log(looseSort(arr));