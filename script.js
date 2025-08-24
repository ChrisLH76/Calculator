const btnAc=document.querySelector('.btnAc');
const btnO=document.querySelector('.btn0')
const btn1=document.querySelector('.btn1');
const btn2=document.querySelector('.btn2');
const btn3=document.querySelector('.btn3')
const btn4=document.querySelector('.btn4')
const btn5=document.querySelector('.btn5')
const btn6=document.querySelector('.btn6')
const btn7=document.querySelector('.btn7')
const btn8=document.querySelector('.btn8')
const btn9=document.querySelector('.btn9')
const displayedNumber = document.querySelector('.displayedNumber');
console.log(displayedNumber);

btnAc.addEventListener("click", () => {
  displayedNumber.textContent="0"
})
btn1.addEventListener("click", () => {
  displayedNumber.textContent="1"
})
btn2.addEventListener("click", () => {
  displayedNumber.textContent="2"
})
btn3.addEventListener("click", () => {
  displayedNumber.textContent="3"
})
btn4.addEventListener("click", () => {
  displayedNumber.textContent="4"
})
btn5.addEventListener("click", () => {
  displayedNumber.textContent="5"
})
btn6.addEventListener("click", () => {
  displayedNumber.textContent="6"
})
btn7.addEventListener("click", () => {
  displayedNumber.textContent="7"
})
btn8.addEventListener("click", () => {
  displayedNumber.textContent="8"
})
btn9.addEventListener("click", () => {
  displayedNumber.textContent="9"
})