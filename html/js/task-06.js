const valueInput = document.getElementById("validation-input");
const validLength = valueInput.dataset.length;

function onToggleValid() {
    valueInput.classList.toggle("valid");
};

function onToggleInvalid() {
    valueInput.classList.toggle("invalid");
};

function validInputName() {
    if (valueInput.value.length === validLength) {
        return onToggleValid;
    }
    return onToggleInvalid;
};

valueInput.addEventListener("blur", validInputName);