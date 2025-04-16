// Write a recursive function that reverses a string.

function rev(str){
    if(str.length==0||str.length==1){
        return str;
    }
    [str.splice(0,1),str.splice(n-1)]=[str.splice(n-1),str.splice(0,1)];
    return rev(str);
}
