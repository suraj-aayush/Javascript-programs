document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            validateRegisterForm();
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            validateLoginForm();
        });
    }
});

function validateRegisterForm() {
    const emailInput = document.getElementById('register-email');
    const passwordInput = document.getElementById('register-password');
    const emailError = document.getElementById('email-error');
    const passwordStrength = document.getElementById('password-strength');

    emailError.textContent = '';
    passwordStrength.textContent = '';

    const email = emailInput.value;
    const password = passwordInput.value;

    if (!isValidEmail(email)) {
        emailError.textContent = 'Please enter a valid top-level domain email.';
        return;
    }

    const strength = checkPasswordStrength(password);
    if (strength !== 'Strong') {
        passwordStrength.textContent = `Password strength: ${strength}`;
        return;
    }

    // Simulate successful registration
    alert('Registration successful!');
}

function validateLoginForm() {
    // Add login validation logic if needed
    alert('Login successful!');
}

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function checkPasswordStrength(password) {
    let strength = 'Weak';
    if (password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /\W/.test(password)) {
        strength = 'Strong';
    } else if (password.length >= 6) {
        strength = 'Medium';
    }
    return strength;
}
