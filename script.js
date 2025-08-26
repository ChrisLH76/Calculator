let userInput = [];
let result = "";

function addNumberInUserInput(number) {
  userInput.push(number);
  result = userInput.join("");
  displayedNumber.textContent = result;
}

function resetUserInput() {
  userInput = [];
  displayedNumber.textContent = "0";
}

// Recuperation des elements HTML des touhces du clavier
const btnAc = document.querySelector(".btnAc");
const btn0 = document.querySelector(".btn0");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
const btn9 = document.querySelector(".btn9");
const btnComma = document.querySelector(".btn-comma");
const btnDeleteLast = document.querySelector(".btn-delete-last");
const displayedNumber = document.querySelector(".displayedNumber");

// Actions corrspondants au click sur les touchers du clavier
btnAc.addEventListener("click", () => {
  resetUserInput();
});
btnDeleteLast.addEventListener("click", () => {
  if (userInput.length > 1) {
    userInput.pop();
    result = userInput.join("");
    displayedNumber.textContent = result;
  } else {
    resetUserInput();
  };
});
btnComma.addEventListener("click", () => {
  userInput.push(".");
  result = userInput.join("");
  displayedNumber.textContent = result;
});
btn0.addEventListener("click", () => {
  addNumberInUserInput("0");
});
btn1.addEventListener("click", () => {
  addNumberInUserInput("1");
});
btn2.addEventListener("click", () => {
  addNumberInUserInput("2");
});
btn3.addEventListener("click", () => {
  addNumberInUserInput("3");
});
btn4.addEventListener("click", () => {
  addNumberInUserInput("4");
});
btn5.addEventListener("click", () => {
  addNumberInUserInput("5");
});
btn6.addEventListener("click", () => {
  addNumberInUserInput("6");
});
btn7.addEventListener("click", () => {
  addNumberInUserInput("7");
});
btn8.addEventListener("click", () => {
  addNumberInUserInput("8");
});
btn9.addEventListener("click", () => {
  addNumberInUserInput("9");
});
