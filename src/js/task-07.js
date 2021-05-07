const sizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

function onSizeControl() {
    text.style.fontSize = sizeControl.value + "px";
};

sizeControl.addEventListener('input', onSizeControl)

