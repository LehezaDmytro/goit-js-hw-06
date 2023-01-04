const getEl = (x) => document.querySelector(x);

const validationInput = getEl("#validation-input");

validationInput.addEventListener("blur", eventLog);

function eventLog(event) {
    if (event.target.value.length === Number(validationInput.dataset.length)) {
        validationInput.classList.remove("invalid");
        validationInput.classList.add("valid");
    } else {
        validationInput.classList.remove("valid");
        validationInput.classList.add("invalid");
    }
};
