
// function greet(name,callback){
//     console.log("Hello, "+name);
//     callback();
// }
// function  hello(){
//     console.log("how r u");
// }
// greet("Avinash",hello);

// //Synchronous 
// function sol(callback){
//     let name="Avinash";
//     callback(name);
// }
// function greet(name) {
//     console.log("Hello, " + name);
// }
  
// sol(greet);

//asynchronous
// function sol(callback){
//     console.log("Fetching data");
//     setTimeout(()=>{
//         callback("Loaded after 2 sec");
//     },2000);
// }
// function hello(a){
//     console.log(a);
// }
// sol(hello);

  
//asynchronous callback for missing data

function getData(id, callback) {
    const localData = {
      1: "Apple",
      2: "Banana"
      // Notice: data for id 3 is missing
    };
    
    if (localData[id]) {
      callback(null, localData[id]); // No error, data found
    } else {
      console.log("Data not found locally. Fetching...");
  
      // Simulating async fetch for missing data
      setTimeout(() => {
        const fetchedData = "Fetched Mango"; // Simulated fetched data
        callback(null, fetchedData);
      }, 2000);
    }
  }
  
  function handleData(error, data) {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log("Received data:", data);
    }
  }
  
  // Call the function once, it handles both present and missing data
  getData(3, handleData);
  
  


  
  
