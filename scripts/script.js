const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const emailValue = email.value;
    // const password = password.value

    if (firstNameValue === "") {
        setErrorFor(firstName, "First name is required.");
    } else {
        setSuccessFor(firstName);
    }

    if (lastNameValue === "") {
        setErrorFor(lastName, "Last name is required.")
    } else {
        setSuccessFor(lastName)
    }
}

function setErrorFor(input, message) {
    const formInput = input.parentElement;

    formInput.className = "form_input error";
}

function setSuccessFor(input) {
    const formInput = input.parentElement;

    formInput.className = "form_input success"
}