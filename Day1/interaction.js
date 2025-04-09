/*
Method	Purpose
alert()	Show a message
prompt()	Ask for input, return it
confirm()	Ask for confirmation (OK/Cancel)
*/
let name=prompt("what is ur name")
let age=confirm("r u above 18")
if(age){
    alert(name + " U r eligible")
}
else{
    alert(name+" u r not eligible")
}

//prompt() returns "" or null
//confirm() returns false for Cancel
//prompt() always returns string (or null)
