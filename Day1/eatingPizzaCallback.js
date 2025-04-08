// function bakePizza(callback) {
//     console.log("Putting pizza in the oven...");
  
//     setTimeout(() => {
//       console.log("Pizza is ready! 🍕");
//       callback(); // this is your brother calling you  --> calls after 2 sec
//         --> This is the correct way
//     }, 2000);
//   }ṇ
  
//   // You give him the instruction right here:
//   bakePizza(() => {
//     console.log("Yay! I'm eating the pizza now!"); // so this gets printed after 2 second
//   });

  function bakePizza(callback) {
    console.log("Putting pizza in the oven...");
  
    setTimeout(() => {
      console.log("Pizza is ready!");
     
    }, 2000);
    callback(); // this is your brother calling you  --> calls immediately
  }
  
  // You give him the instruction right here:
  bakePizza(() => {
    console.log("Yay! I'm eating the pizza now!"); // so this gets printed before only
  });

  // Summary:
  // callback() inside setTimeout → runs after delay ✅
  
  // callback() outside setTimeout → runs immediately ❌ (too early)
  
  
