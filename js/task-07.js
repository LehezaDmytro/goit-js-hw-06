const spanText = document.querySelector('#text')
spanText.style.fontSize = '56px';

const inputRange = document.querySelector('#font-size-control');
inputRange.addEventListener("input", changeFontSize);

function changeFontSize(event) {
    spanText.style.fontSize = `${event.target.value}px`
}