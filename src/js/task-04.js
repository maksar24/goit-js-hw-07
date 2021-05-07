const beginningValue = document.getElementById('value');
const allButtons = document.querySelectorAll('#counter button');
const buttonDecrement = allButtons[0];
const buttonIncrement = allButtons[1];
let counterValue = 0;

function onClickDecrementValue() {
    counterValue -= 1;
    beginningValue.textContent = counterValue;
};

function onClickIncrementValue () {
    counterValue += 1;
    beginningValue.textContent = counterValue;
};

buttonDecrement.addEventListener("click", onClickDecrementValue);
buttonIncrement.addEventListener("click", onClickIncrementValue);

