let displayNumber = document.getElementById("num");
let value = 0;

let btnIncrease = document.querySelector(".increase");
let btnDecrease = document.querySelector(".decrease");
let btnReset = document.querySelector(".reset");

btnIncrease.addEventListener("click", () => {
  value++;
  displayNumber.textContent = value;
});

btnDecrease.addEventListener("click", () => {
  value--;
  displayNumber.textContent = value;
});

btnReset.addEventListener("click", () => {
  value = 0;
  displayNumber.textContent = value;
});
