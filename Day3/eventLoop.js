// a mechanism that allows JavaScript (which is single-threaded) to handle asynchronous code
// (like timers, user input, HTTP requests) without blocking the main thread.

//  The Three Main Components
// Call Stack – Where functions are executed (LIFO – last in, first out).
// Web APIs / Background – Browser-provided features (like setTimeout, fetch).
// Callback Queue / Task Queue – Where async callbacks wait to be executed.
// (Bonus: Microtask Queue – for promises, queueMicrotask, etc.)

//Visual Representation
// 1. JS executes code line-by-line in the Call Stack.
// 2. Async tasks (like setTimeout) go to Web APIs.
// 3. Once they finish (e.g., timer ends), they are moved to the Callback Queue.
// 4. Event Loop checks:
//     → Is the Call Stack empty?
//     → If YES, it moves a task from the queue to the Call Stack.
//     → Repeat forever.


// console.log("1");
// setTimeout(() => console.log("2"), 100);
// setTimeout(() => console.log("3"), 0);
// Promise.resolve().then(() => console.log("4"));
// console.log("5");
// // 1 5 4 3 2 



// console.log("A");
// setTimeout(() => {
//   console.log("B");
// }, 0);
// Promise.resolve().then(() => {
//   console.log("C");
//   return Promise.resolve();
// }).then(() => {
//   console.log("D");
// });
// console.log("E");
// //A E C D B


// console.log("1");
// setTimeout(() => {
//   console.log("2");
// }, 0);
// Promise.resolve().then(() => {
//   console.log("3");
//   queueMicrotask(() => {
//     console.log("4");
//   });
// });
// Promise.resolve().then(() => {
//   console.log("5");
// });
// console.log("6");
// //1 6 3 5 4 2


// console.log("start");
// setTimeout(() => {
//   console.log("timeout");
// }, 0);
// Promise.resolve().then(() => {
//   console.log("promise1");
//   return Promise.resolve().then(() => {
//     console.log("promise2");
//   });
// }).then(() => {
//   console.log("promise3");
// });
// for (let i = 0; i < 100000000; i++) {} // simulate blocking
// console.log("end");
// //start end promise1 promise2 promise3

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
  setTimeout(() => {
    console.log("D");
  }, 0);
});

queueMicrotask(() => {
  console.log("E");
});

console.log("F");
//A F C E B D
