// Made by chris76LH
// Declaration de variables et fonctions
let userInput = [];
let result = "";
let completeUserInput = [];
let completeResult = "";

function addNumberInUserInput(number) {
  userInput.push(number);
  result = userInput.join("");
  displayedNumber.textContent = result;
}

function resetUserInput() {
  userInput = [];
  result = "";
  displayedNumber.textContent = "0";
}

function displayFinalResult(value) {
  return eval(value);
}

// Recuperation des elements HTML des touches du clavier //
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
const btnAc = document.querySelector(".btnAc");
const btnMc = document.querySelector(".btnMc");
const btnComma = document.querySelector(".btn-comma");
const btnDeleteLast = document.querySelector(".btn-delete-last");
const displayedNumber = document.querySelector(".displayedNumber");
const btnPlusMinor = document.querySelector(".btn-plus-sign-or-minus-sign");
const btnPlus = document.querySelector(".btn-plus");
const btnEqual = document.querySelector(".equal");
const btnMinor = document.querySelector(".btn-minor");
const btnMultiplier = document.querySelector(".btn-multiplier");
const btnDiviser = document.querySelector(".btn-diviser")

// Actions correspondants au click sur les touchers du clavier

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

// Bouton AC //
btnAc.addEventListener("click", () => {
  resetUserInput();
});

// Bouton MC //
btnMc.addEventListener("click", () => {
  resetUserInput();
  completeUserInput = []
  completeResult = ""
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
    if (userInput[0] == null) {
      userInput.push("0.");
      result = userInput.join("");
      displayedNumber.textContent = result;
    } else {
      userInput.push(".");
      result = userInput.join("");
      displayedNumber.textContent = result;
    }
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

// Les boutons operateurs //

// Bouton + //

btnPlus.addEventListener("click", () => {
  completeUserInput.push(...userInput);
  completeUserInput.push("+");
  completeResult = completeUserInput.join("");
  resetUserInput();
  displayedNumber.textContent = "";
});

// Bouton - //

btnMinor.addEventListener("click", () => {
  completeUserInput.push(...userInput);
  completeUserInput.push("-");
  completeResult = completeUserInput.join("");
  resetUserInput();
  displayedNumber.textContent = "";
});

// Bouton * //

btnMultiplier.addEventListener("click", () => {
  completeUserInput.push(...userInput);
  completeUserInput.push("*");
  completeResult = completeUserInput.join("");
  resetUserInput();
  displayedNumber.textContent = "";
});

// Bouton Diviser //

btnDiviser.addEventListener("click", () => {
  completeUserInput.push(...userInput);
  completeUserInput.push("/");
  completeResult = completeUserInput.join("");
  resetUserInput();
  displayedNumber.textContent = "";
});

// Bouton = //

btnEqual.addEventListener("click", () => {
  completeUserInput.push(...userInput);
  completeResult = completeUserInput.join("");
  finalResult = displayFinalResult(completeResult);
  completeUserInput = [finalResult];
  userInput.push(finalResult);
  resetUserInput();
  displayedNumber.textContent = finalResult;
});
