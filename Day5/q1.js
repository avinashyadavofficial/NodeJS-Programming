let str=['A','B','C','D'];
let len=str.length;
let ans=[];
for(let i=0;i<str.length-1;i++){
    
    for(let j=i+1;j<str.length;j++){
        ans.push(Array(`${str[i]},${str[j]}`));
        
    }
    
    
}
console.log(...ans);


