let userInput = [""];
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
const btnPlusMinor = document.querySelector(".btn-plus-sign-or-minus-sign");

// Actions corrspondants au click sur les touchers du clavier

// Bouton AC //
btnAc.addEventListener("click", () => {
  resetUserInput();
});
//Bouton Delete //
btnDeleteLast.addEventListener("click", () => {
  if (userInput.length > 1) {
    userInput.pop();
    result = userInput.join("");
    displayedNumber.textContent = result;
  } else {
    resetUserInput();
  }
});
//Bouton Virgule//
btnComma.addEventListener("click", () => {
  if (userInput[userInput.length - 1] !== "." && !userInput.includes(".")) {
    if (userInput[0]==null) {
    userInput.push("0.");
    result = userInput.join("");
    displayedNumber.textContent = result;}
    else {userInput.push(".");
    result = userInput.join("");
    displayedNumber.textContent = result;}
  } else {
    return;
  }
});
// Bouton Inverser //
btnPlusMinor.addEventListener("click", () => {
  if (userInput[0] !== "-") {
    userInput.unshift("-");
    result = userInput.join("");
    displayedNumber.textContent = result;
  } else {
    userInput.shift();
    result = userInput.join("");
    displayedNumber.textContent = result;
  }
});

// Bouton 0 //
btn0.addEventListener("click", () => {
  addNumberInUserInput("0");
});
// Bouton 1//
btn1.addEventListener("click", () => {
  addNumberInUserInput("1");
});
// Bouton 2//
btn2.addEventListener("click", () => {
  addNumberInUserInput("2");
});
// Bouton 3//
btn3.addEventListener("click", () => {
  addNumberInUserInput("3");
});
// Bouton 4 //
btn4.addEventListener("click", () => {
  addNumberInUserInput("4");
});
// Bouton 5 //
btn5.addEventListener("click", () => {
  addNumberInUserInput("5");
});
// Bouton 6 //
btn6.addEventListener("click", () => {
  addNumberInUserInput("6");
});
// Bouton 7 //
btn7.addEventListener("click", () => {
  addNumberInUserInput("7");
});
// Bouton 8//
btn8.addEventListener("click", () => {
  addNumberInUserInput("8");
});
// Bouton 9 //
btn9.addEventListener("click", () => {
  addNumberInUserInput("9");
});
