// script.js
document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validate full name length
    if (fullName.length < 5) {
        showError('Full name must be at least 5 characters.');
        return;
    }

    // Validate email format
    if (!email.includes('@')) {
        showError('Enter a valid email address.');
        return;
    }

    // Validate phone number
    if (phone === '123456789' || phone.length !== 10) {
        showError('Enter a valid 10-digit phone number.');
        return;
    }

    // Validate password strength
    if (password === 'password' || password.length < 8) {
        showError('Password must be at least 8 characters and not "password".');
        return;
    }
    if (fullName === password) {
        showError('Password cannot be the same as username.');
        return;
    }
    // Validate password match
    if (password !== confirmPassword) {
        showError('Passwords do not match.');
        return;
    }
    showSuccess('Registration successful!');
});

function showError(message) {
    document.getElementById('error-message').textContent = message;
}

function showSuccess(message) {
    document.getElementById('error-message').textContent = '';
    alert(message);
}
