const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  console.log("First handler");
});

btn.onclick = () => {
  console.log("Second handler");
};

btn.addEventListener("click", () => {
  console.log("Third handler");
});
