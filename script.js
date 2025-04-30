document.addEventListener('DOMContentLoaded', () => {
   
    document.querySelector('.form-box.login').classList.add('active');
});

// Handle form submission
document.querySelector('.form-box.login form').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Login form submitted');
    
});