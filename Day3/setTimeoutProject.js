const name="Avinash";
let i=0;
function typing(){
    if(i<name.length){
        process.stdout.write(name[i]); // prints without newline
        i++;
        setInterval(typing,400);
    }
    else{
        setInterval(backspace,1000);
    }
}
function backspace(){
    if(i>=0){
        process.stdout.write(`${name.slice(0,i)}`);
        i--;

    }
}
typing();

