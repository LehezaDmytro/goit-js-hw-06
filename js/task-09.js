function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector('.change-color');
const spanBgColor = document.querySelector('.color');
btn.addEventListener('click', clickBtn);
function clickBtn(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  spanBgColor.textContent = getRandomHexColor();
}