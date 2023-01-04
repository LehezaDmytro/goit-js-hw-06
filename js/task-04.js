// Варіант №1
let counterValue = 0;
const counter = document.querySelector('#value')

const decrement = document.querySelector('[data-action="decrement"]')

decrement.addEventListener("click", () => {
    counter.textContent = counterValue -= 1;
})

const increment = document.querySelector('[data-action="increment"]')

increment.addEventListener("click", () => {
    counter.textContent = counterValue += 1;
})

// Варіант №2
// const counterValue = document.querySelector('#value')

// const decrement = document.querySelector('[data-action="decrement"]')

// decrement.addEventListener("click", () => {
//     counterValue.textContent = Number(counterValue.textContent) - 1;
// })

// const increment = document.querySelector('[data-action="increment"]')

// increment.addEventListener("click", () => {
//     counterValue.textContent = Number(counterValue.textContent) + 1;
// })