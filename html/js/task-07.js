const sizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

function onSizeControl() {
    text.style.fontSize = sizeControl.value + "px";
};

sizeControl.addEventListener('input', onSizeControl)

