const form = document.querySelector('.login-form');

form.addEventListener('submit', formProcessing);

const userData = { email: "", password: "" }

function formProcessing(event) {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    };
    userData.email = email.value;
    userData.password = password.value
    console.log(userData);
    event.currentTarget.reset();
}