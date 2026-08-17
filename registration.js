const form = document.getElementById("registrationForm");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

const successMessage = document.getElementById("successMessage");

function showError(input, errorElement, message) {
    input.classList.add("invalid");
    errorElement.textContent = message;
}

function clearError(input, errorElement) {
    input.classList.remove("invalid");
    errorElement.textContent = "";
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    // Full name validation
    if (fullName.value.trim().length < 3) {
        showError(
            fullName,
            nameError,
            "Name must contain at least 3 characters."
        );
        isValid = false;
    } else {
        clearError(fullName, nameError);
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value.trim())) {
        showError(email, emailError, "Enter a valid email address.");
        isValid = false;
    } else {
        clearError(email, emailError);
    }

    // Phone validation
    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone.value.trim())) {
        showError(
            phone,
            phoneError,
            "Phone number must contain exactly 10 digits."
        );
        isValid = false;
    } else {
        clearError(phone, phoneError);
    }

    // Password validation
    if (password.value.length < 8) {
        showError(
            password,
            passwordError,
            "Password must contain at least 8 characters."
        );
        isValid = false;
    } else {
        clearError(password, passwordError);
    }

    // Confirm password validation
    if (confirmPassword.value !== password.value) {
        showError(
            confirmPassword,
            confirmPasswordError,
            "Passwords do not match."
        );
        isValid = false;
    } else {
        clearError(confirmPassword, confirmPasswordError);
    }

    // Successful registration
    if (isValid) {
        successMessage.textContent =
            "Registration successful!";

        form.reset();

        setTimeout(() => {
            successMessage.textContent = "";
        }, 3000);
    } else {
        successMessage.textContent = "";
    }
});