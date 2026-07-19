// ======================================
// GET ELEMENTS
// ======================================

const loginForm =
    document.getElementById("loginForm");

const emailInput =
    document.getElementById("email");

const passwordInput =
    document.getElementById("password");

const emailError =
    document.getElementById("emailError");

const passwordError =
    document.getElementById("passwordError");

const errorMessage =
    document.getElementById("errorMessage");

const passwordToggle =
    document.getElementById("passwordToggle");

const eyeIcon =
    document.getElementById("eyeIcon");

const signInBtn =
    document.getElementById("signInBtn");

const rememberMe =
    document.getElementById("rememberMe");

const forgotPassword =
    document.getElementById("forgotPassword");

const googleLogin =
    document.getElementById("googleLogin");


// ======================================
// SHOW / HIDE PASSWORD
// ======================================

passwordToggle.addEventListener(
    "click",
    function () {

        if (passwordInput.type === "password") {

            passwordInput.type = "text";

            eyeIcon.classList.remove(
                "fa-eye"
            );

            eyeIcon.classList.add(
                "fa-eye-slash"
            );

        }

        else {

            passwordInput.type = "password";

            eyeIcon.classList.remove(
                "fa-eye-slash"
            );

            eyeIcon.classList.add(
                "fa-eye"
            );

        }

    }
);


// ======================================
// EMAIL VALIDATION
// ======================================

function validateEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}


// ======================================
// LOGIN FORM
// ======================================

loginForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        // Clear previous errors

        emailError.textContent = "";

        passwordError.textContent = "";

        errorMessage.classList.remove(
            "show"
        );


        const email =
            emailInput.value.trim();

        const password =
            passwordInput.value.trim();


        let isValid = true;


        // Email validation

        if (email === "") {

            emailError.textContent =
                "Please enter your email address.";

            isValid = false;

        }

        else if (!validateEmail(email)) {

            emailError.textContent =
                "Please enter a valid email address.";

            isValid = false;

        }


        // Password validation

        if (password === "") {

            passwordError.textContent =
                "Please enter your password.";

            isValid = false;

        }

        else if (password.length < 6) {

            passwordError.textContent =
                "Password must contain at least 6 characters.";

            isValid = false;

        }


        if (!isValid) {

            return;

        }


        // ==================================
        // LOGIN LOADING STATE
        // ==================================

        signInBtn.disabled = true;

        signInBtn.innerHTML = `
            <i class="fa-solid fa-spinner fa-spin"></i>
            <span>Signing In...</span>
        `;


        // ==================================
        // DEMO LOGIN
        // Replace this with backend login
        // ==================================

        setTimeout(function () {

            /*
            Later connect your backend here.

            Example:

            fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type":
                    "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            */


            // Save email if Remember Me selected

            if (rememberMe.checked) {

                localStorage.setItem(
                    "rememberedEmail",
                    email
                );

            }

            else {

                localStorage.removeItem(
                    "rememberedEmail"
                );

            }


            // DEMO SUCCESS
            // Redirect to organization selection

            window.location.href =
                "select-organization.html";


        }, 1200);

    }
);


// ======================================
// LOAD REMEMBERED EMAIL
// ======================================

window.addEventListener(
    "DOMContentLoaded",
    function () {

        const savedEmail =
            localStorage.getItem(
                "rememberedEmail"
            );


        if (savedEmail) {

            emailInput.value =
                savedEmail;

            rememberMe.checked =
                true;

        }

    }
);


// ======================================
// FORGOT PASSWORD
// ======================================

forgotPassword.addEventListener(
    "click",
    function (event) {

        event.preventDefault();

        const email =
            emailInput.value.trim();


        if (email === "") {

            emailError.textContent =
                "Enter your email address first.";

            emailInput.focus();

            return;

        }


        alert(
            "Password reset instructions will be sent to " +
            email
        );

    }
);


// ======================================
// GOOGLE LOGIN
// ======================================

googleLogin.addEventListener(
    "click",
    function () {

        alert(
            "Google Sign-In will be connected with your authentication backend."
        );

    }
);