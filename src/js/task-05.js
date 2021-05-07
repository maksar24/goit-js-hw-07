const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");



inputName.addEventListener("input", changeName);

function changeName() {
    if (inputName.value === '') {
        return  outputName.textContent = 'незнакомец';
    }
    outputName.textContent = inputName.value;
};

