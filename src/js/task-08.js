const boxes = document.getElementById('boxes');
const input = document.querySelector('#controls input');
const render = document.querySelector('[data-action="render"]');
const destroy = document.querySelector('[data-action="destroy"]');

function getAmount() {
  let amount = input.value;
  let normalSize = 30;

  for (let i = 0; i < amount; i++) {
    let size = normalSize + i * 10;
    const element = document.createElement('div');
    element.style.cssText =
      `width: ${size}px;
            height: ${size}px;
            background-color: rgba( ${getRandomInt()} , 
                                    ${getRandomInt()} , 
                                    ${getRandomInt()} )`;
    boxes.appendChild(element);
  };
}

function getRandomInt() {
  return Math.floor(Math.random() * 256);
};

function destroyBoxes() {
  boxes.innerHTML = "";
};

render.addEventListener("click", getAmount);
destroy.addEventListener("click", destroyBoxes);
