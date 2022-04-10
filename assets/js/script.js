let display = document.getElementById("display");
display.innerText = "0";

let btnDec = document.getElementById("btnDec");
let dec = document.createElement("button");
dec.innerText = "decrease";
btnDec.appendChild(dec);

let btnReset = document.getElementById("btnReset");
let reset = document.createElement("button");
reset.innerText = "reset";
btnReset.appendChild(reset);

let btnInc = document.getElementById("btnInc");
let inc = document.createElement("button");
inc.innerText = "increase";
btnInc.appendChild(inc);

let value = 0;

btnDec.addEventListener("click", () => {
    value--;
    displayValue();
});

btnReset.addEventListener("click", () => {
    value = 0;
    displayValue();
});

btnInc.addEventListener("click", () => {
    value++;
    displayValue();
});

function displayValue() {
    display.innerHTML = value;
};
