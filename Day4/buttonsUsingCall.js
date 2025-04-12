function showMsg(){
    console.log(`${this.label} button clicked`);
}
const button1={label:"Login"};
const button2={label: "SignUp"};
showMsg.call(); //undefined button clicked
showMsg.call(button1);//Login button clicked
showMsg.call(button2); //SignUp button clicked

