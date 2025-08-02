
document.addEventListener('DOMContentLoaded', () => {
   
const form = document.getElementById('registration-form');
const feedbackDiv = document.getElementById('form-feedback');

form.addEventListener('submit', (event) => {
    event.preventDefault();

const username = document.getElementById('username').value.trim();
const email = document.getElementById('email').value.trim();
const password = document.getElementById('password').value.trim();
     isValid=true;
     const messages = [];
     if(username.length<3){
        isValid=false;
        messages.push('Username must be at least 3 characters long.');
     }
     if (!email.includes('@') || !email.includes('.')) {
    isValid = false;
    messages.push('Please enter a valid email address.');
}
if (password.length < 8) {
    isValid = false;
    messages.push('Password must be at least 8 characters long.');
}
feedbackDiv.style.display = 'block';
if (isValid) {
    feedbackDiv.textContent = 'Registration successful!';
    feedbackDiv.style.color = '#28a745';        // Green color for success
    feedbackDiv.style.backgroundColor = '#d4edda'; // Light green background
} else {
    feedbackDiv.innerHTML = messages.join('<br>'); // Show all errors with line breaks
    feedbackDiv.style.color = '#dc3545';        // Red color for errors
    feedbackDiv.style.backgroundColor = '#ffbaba';  // Light red background
}
  
});
});