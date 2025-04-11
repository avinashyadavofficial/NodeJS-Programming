// // way to delay execution or run something repeatedly after a time gap

// //. setTimeout(fn, delay)
// setTimeout(()=>{
//     console.log("Hello after 2 second");
// },2000);

// setTimeout(function (){
//     console.log("Hello after 2 second");
// },2000);

// ///2. setInterval(fn, delay)

// // setInterval(() => {
// //     console.log("Runs every second");
// //   }, 1000);

// //Cancelling
// let id =setInterval(() => {
//     console.log("Not run for single time also bcz clearInterval(id)");
//   }, 1000);

// clearInterval(id)  

// //also
// let id1=setTimeout(()=>{
//     console.log("Hello after 2 second");
// },2000);
// clearTimeout(id1)


//example
let count = 5;

const id2= setInterval(() => {
  console.log(count);
  count--;
  if(count<0){
    console.log("time up");
    clearInterval(id2);
  }
  
}, 1000);

