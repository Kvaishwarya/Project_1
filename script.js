// Select elements
const container = document.querySelector('.container');
const loginForm = document.querySelector('.form-box.login');
const registerForm = document.querySelector('.form-box.register');
const forgotForm = document.querySelector('.form-box.forgot-password');
const toggleLeft = document.querySelector('.toggle-panel.toggle-left');
const toggleRight = document.querySelector('.toggle-panel.toggle-right');
const toggleForgot = document.querySelector('.toggle-panel.toggle-forgot');

// Function to show login panel
function showLogin() {
    console.log('Showing login panel');
    container.classList.remove('active', 'forgot-active');
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
    forgotForm.classList.remove('active');
    toggleLeft.classList.add('active');
    toggleRight.classList.remove('active');
    toggleForgot.classList.remove('active');
}

// Function to show register panel
function showRegister() {
    console.log('Showing register panel');
    container.classList.add('active');
    container.classList.remove('forgot-active');
    loginForm.classList.remove('active');
    registerForm.classList.add('active');
    forgotForm.classList.remove('active');
    toggleLeft.classList.remove('active');
    toggleRight.classList.add('active');
    toggleForgot.classList.remove('active');
}

// Function to show forgot password panel
function showForgotPassword() {
    console.log('Showing forgot password panel');
    container.classList.add('forgot-active');
    container.classList.remove('active');
    loginForm.classList.remove('active');
    registerForm.classList.remove('active');
    forgotForm.classList.add('active');
    toggleLeft.classList.remove('active');
    toggleRight.classList.remove('active');
    toggleForgot.classList.add('active');
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Set initial state to login
    showLogin();

    // Register button
    const registerBtn = document.querySelector('#register-btn');
    if (registerBtn) {
        registerBtn.addEventListener('click', () => {
            console.log('Register button clicked');
            showRegister();
        });
    } else {
        console.error('Register button not found');
    }

    // Login button
    const loginBtn = document.querySelector('#login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            console.log('Login button clicked');
            showLogin();
        });
    } else {
        console.error('Login button not found');
    }

    // Forgot password link
    const forgotLink = document.querySelector('.forgot-password');
    if (forgotLink) {
        forgotLink.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Forgot password link clicked');
            showForgotPassword();
        });
    } else {
        console.error('Forgot password link not found');
    }

    // Back to login buttons
    const backToLoginLinks = document.querySelectorAll('.back-to-login, #back-to-login-btn');
    backToLoginLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Back to login clicked');
            showLogin();
        });
    });

    // Fallback event delegation
    document.addEventListener('click', (event) => {
        if (event.target.matches('#login-btn') || event.target.closest('.login-btn')) {
            console.log('Login button clicked via delegation');
            showLogin();
        } else if (event.target.matches('#register-btn') || event.target.closest('.register-btn')) {
            console.log('Register button clicked via delegation');
            showRegister();
        } else if (event.target.matches('.forgot-password')) {
            console.log('Forgot password link clicked via delegation');
            event.preventDefault();
            showForgotPassword();
        }
    });

    // Password visibility toggle
    document.querySelectorAll('.toggle-password').forEach(icon => {
        icon.addEventListener('click', () => {
            const input = icon.previousElementSibling.previousElementSibling || icon.previousElementSibling;
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('bx-show');
                icon.classList.add('bx-hide');
            } else {
                input.type = 'password';
                icon.classList.remove('bx-hide');
                icon.classList.add('bx-show');
            }
        });
    });

    // Form submissions
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Login submitted successfully!');
        e.target.reset();
    });

    document.getElementById('register-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Registration submitted successfully!');
        e.target.reset();
    });

    document.getElementById('forgot-password-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Password reset link sent successfully!');
        e.target.reset();
        showLogin();
    });
});