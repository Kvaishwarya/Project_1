document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.form-box.login').classList.add('active');


    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');

    togglePassword.addEventListener('click', () => {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        togglePassword.classList.toggle('bx-show');
        togglePassword.classList.toggle('bx-hide');
    });
});


document.querySelector('.form-box.login form').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Login form submitted');
  
    event.target.reset(); // Clear form fields
});