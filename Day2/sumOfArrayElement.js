function sol(arr){
    if(arr.length==0){
        return 0;
    }
    return arr[0]+sol(arr.slice(1));
}
console.log(sol([1,2,5,8]));