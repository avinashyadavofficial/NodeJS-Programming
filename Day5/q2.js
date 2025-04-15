let s = ["aaabbcd","abc","aaa"];
let ans=[];
for(let i=0;i<s.length;i++){
    let st = new Set(s[i]); 
    let len=st.size;
    function factorial(n) {
    if(n == 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
ans.push(factorial(len));
} 
console.log(...ans)

