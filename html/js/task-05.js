const inputName = document.getElementById("name-input");
const outputName = document.getElementById("name-output");



inputName.addEventListener("input", changeName);

function changeName() {
    if (inputName.value === '') {
        return  outputName.textContent = 'незнакомец';
    }
    outputName.textContent = inputName.value;
};

