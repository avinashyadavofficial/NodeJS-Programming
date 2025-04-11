const a="Avinash";
let i=a.length;
function backspace(){
    if(i>=0){
        process.stdout.write(`\r${a.slice(0, i)} `);
        i--;
        setTimeout(backspace,2000);
    }
    else{
        console.log("\all gone");
    }
}
backspace();
