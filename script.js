// Step 1: Wrap all code so it runs only after the HTML is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Step 2: Select the form element
    const form = document.getElementById('registration-form');

    // Step 3: Select the feedback div
    const feedbackDiv = document.getElementById('form-feedback');

    // Step 4: Add submit event listener to the form
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent actual form submission

        // Step 5: Retrieve and trim user inputs
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Step 6: Initialize validation status and messages array
        let isValid = true;
        const messages = [];

        // Step 7: Validate username
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Step 8: Validate email
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // Step 9: Validate password
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Step 10: Display feedback
        feedbackDiv.style.display = 'block'; // make feedback visible
        if (isValid) {
            // Success message
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
            feedbackDiv.style.backgroundColor = '#d4edda';
        } else {
            // Show all error messages, separated by line breaks
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
            feedbackDiv.style.backgroundColor = '#ffbaba';
        }
    });
});
