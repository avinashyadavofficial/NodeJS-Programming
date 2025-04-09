function flatten(arr){
    let res=[];
    arr.forEach(el=>{
        if(Array.isArray(el)){
            res=res.concat(flatten(el));
        }
        else{
            res.push(el);
        }
    })
    return res;    
}
console.log(flatten([1,2,[3,4],[8,9,3,[7,10]]]));
//[1,2,3,4,8,9,3,7,10]
