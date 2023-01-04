const inputField = document.querySelector('#name-input')

const greeting = document.querySelector('#name-output')

function changeInput(event) {
    if (event.target.value === "") {
        greeting.textContent = "Anonymous"
    } else {
        greeting.textContent = event.target.value
    }
}

inputField.addEventListener('input', changeInput)