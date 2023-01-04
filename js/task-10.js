function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]')
const btnDestroy = document.querySelector('[data-destroy]')
const boxes = document.querySelector('#boxes');

let sizeDiv = 30;
function createBoxes(amount) {
  for (let index = 0; index < amount; index++) {
    boxes.insertAdjacentHTML('beforeend', `<div style="width: ${sizeDiv}px; height: ${sizeDiv}px; background-color: ${getRandomHexColor()};"></div>`);
    sizeDiv += 10;
  }
}

btnCreate.addEventListener('click', clickCreate);
function clickCreate(event) {
  createBoxes(input.value);
}

btnDestroy.addEventListener('click', clickDestroy);
function clickDestroy(event) {
  boxes.innerHTML = "";
}