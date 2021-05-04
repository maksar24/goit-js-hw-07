const valueInput = document.getElementById("validation-input");
const validLength = valueInput.dataset.length;

function validInputName(event) {
    if (valueInput.value.length !== Number(validLength)) {
            return onAddInvalid(event);
    };
    return onAddValid(event);
};

function onAddValid() {
    valueInput.classList.add("valid");
};

function onAddInvalid() {
    valueInput.classList.add("invalid");
};

function onRemoveClass() {
    valueInput.classList.remove(...valueInput.classList);
};

valueInput.addEventListener("blur", validInputName);
valueInput.addEventListener("focus", onRemoveClass);