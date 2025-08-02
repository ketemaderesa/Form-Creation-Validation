Form-Creation-Validation
--------------------------------------------------------------------------------------------------------------------
Author: Ketema Deresa
---------------------------------------------------------------------------------------------------------------------
This project demonstrates two core front-end tasks using HTML, CSS, and JavaScript:

Form Creation and Validation – validating user input for username, email, and password before form submission.

Fetching API Data – asynchronously fetching user data from a public API and displaying it on the webpage.

Project Structure

Form-Creation-Validation/
│
├── index.html        # HTML for form validation
├── style.css         # Styles for form
├── script.js         # JavaScript form validation logic
│
├── fetch-data.html   # HTML for API data fetching
├── fetch-data.css    # Styles for API data display
└── fetch-data.js     # JavaScript API fetch logic
1. Form Validation
Features
Validates input fields (username, email, password) using basic string methods.

Displays success message if all validations pass.

Displays descriptive error messages for invalid inputs.

Validation Rules
Username must be at least 3 characters long.

Email must contain both @ and . characters.

Password must be at least 8 characters long.

How It Works
JavaScript waits for the DOM to load (DOMContentLoaded).

Listens for the submit event on the form (#registration-form).

Prevents default form submission (event.preventDefault()).

Trims and validates inputs:

If validation fails, error messages are shown.

If validation succeeds, a green success message is shown.

2. Fetching Data from API
Features
Fetches user data asynchronously from https://jsonplaceholder.typicode.com/users.

Displays user names in a styled list.

Handles network or fetch errors gracefully.

How It Works
On page load, fetchUserData() is executed.

Uses fetch() with async/await to retrieve user data.

Dynamically creates a <ul> list of user names and appends it to the page.

If an error occurs, a friendly error message is displayed.

Usage
Form Validation
Open index.html in a browser.

Fill in the form and click Submit.

View validation messages in real-time.

Fetch API Data
Open fetch-data.html in a browser.

The page automatically loads and displays user data from the API.

Technologies Used
HTML5

CSS3

JavaScript (ES6)

Setup
No build tools are required. Just clone the repository and open the HTML files in any modern browser.
git clone https://github.com/<your-username>/Form-Creation-Validation.git
cd Form-Creation-Validation
License
This project is open-source