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
    const passwordValue = password.value;
    // const passwordConfirmationValue = passwordConfirmation.value;

    if (firstNameValue === "") {
        setErrorFor(firstName, "First Name cannot be empty");
    } else {
        setSuccessFor(firstName);
    }

    if (lastNameValue === "") {
        setErrorFor(lastName, "Last Name cannot be empyt");
    } else {
        setSuccessFor(lastName);
    }

    if (emailValue === "") {
        setErrorFor(email, "Email is required.");
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Looks like this is not an email");
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === "") {
        setErrorFor(password, "Password cannot be empty");
    } else {
        setSuccessFor(password);
    }
}

function setErrorFor(input, message) {
    const formInput = input.parentElement;
    const small = formInput.querySelector("small");
    // const placeholderValue = input.getAttribute("placeholder");

    // add class name error
    formInput.className = "form_input error";

    // add error message
    small.innerText = message;

}

function setSuccessFor(input) {
    const formInput = input.parentElement;

    // add class name success
    formInput.className = "form_input success"
}
    //email validation
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}
