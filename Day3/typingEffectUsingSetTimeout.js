const name="Avinash";
let i=0;
function typing(){
    if(i<name.length){
        process.stdout.write(name[i]); // prints without newline
        i++;
        setTimeout(typing,600);
    }
    else{
        console.log("\nDone typing");
    }
}
typing();