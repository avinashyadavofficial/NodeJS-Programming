const app = {
    count: 0,
    increment() {
      this.count++;
      console.log(`Clicked ${this.count} times`);
    }
};
  
   document
    .getElementById("btn")
    // .addEventListener("click", app.increment); //Clicked NaN times
    .addEventListener("click",app.increment.bind(app));
  