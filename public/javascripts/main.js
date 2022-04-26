function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--error", "form__message--success");
    if (type == "error") {
        messageElement.classList.add("form__message--error");
    } else if (type == "success") {
        messageElement.classList.add("form__message--success");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    const forgetPasswordForm = document.querySelector("#forgetPassword");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        createAccountForm.classList.remove("form__hidden");
        loginForm.classList.add("form__hidden");
        forgetPasswordForm.classList.add("form__hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form__hidden");
        createAccountForm.classList.add("form__hidden");
        forgetPasswordForm.classList.add("form__hidden");
    });

    document.querySelector("#linkForgetPassword").addEventListener("click", e => {
        e.preventDefault();
        forgetPasswordForm.classList.remove("form__hidden");
        createAccountForm.classList.add("form__hidden");
        loginForm.classList.add("form__hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        setFormMessage(loginForm, "success", "You're logged in!");

    });
    createAccountForm.addEventListener("submit", e => {
        e.preventDefault();

        setFormMessage(createAccountForm, "success", "Account created!");
    });
    forgetPasswordForm.addEventListener("submit", e => {
        e.preventDefault();

        setFormMessage(forgetPasswordForm, "success", "Verification Email has been sent.");
    });
});