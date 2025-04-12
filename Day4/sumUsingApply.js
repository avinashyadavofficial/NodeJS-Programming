let arr=[10,20,30];
function sum(a,b,c){
    console.log(a+b+c);
}
sum(arr);//10,20,30undefinedundefined
sum.apply(arr);//NaN
sum.apply(null,arr);//60
sum(...arr);//60;
