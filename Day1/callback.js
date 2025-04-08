/*
A callback is just a function that you pass to another function,
 so that it can be called later, usually after something is done.

Imagine calling a pizza place: You place the order and give them your number (callback).
When the pizza is ready, they call you back.
*/

//Using callback
// function doSomethingSlow(callback) {
//     console.log("Starting slow task...");
  
//     setTimeout(function () {
//       console.log("Finished slow task!");
//       callback(); // this runs AFTER the slow task
//     }, 2000); // waits 2 seconds
// }

// function afterDone() {
//     console.log("Now do something after slow task.");
//   }
  
// doSomethingSlow(afterDone);

//without Callback
function doStuff(callback) {
    console.log("Start");
    setTimeout(() => {
        console.log("Slow thing")
        callback();
    }, 2000);
    
}

// function aftercall(){
//     console.log("it should print first");
// }
// doStuff(aftercall);

doStuff(()=>{
    console.log("this will print first")
});
  

  
  