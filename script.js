const sumByCheck = document.querySelector(".sumByCheck");
const btnCalculate = document.querySelector(".btn-calculate")
const inputText = document.querySelector(".inputText")
const btnReset = document.querySelector(".btn-reset")
const tips = document.querySelector(".tips")
const tipValue = document.querySelector(".tipValue")
const allValue = document.querySelector(".allValue")


let price = 0;
let commonPrice = 0;



btnCalculate.addEventListener("click", btnCalculateHandler);
function btnCalculateHandler(event) {
    event.preventDefault();
    price = (+sumByCheck.value / +inputText.value) * +tips.value
    commonPrice = +sumByCheck.value + +tips.value
    tipValue.innerHTML = price;
    allValue.innerHTML = commonPrice;
    console.log(commonPrice)
}

