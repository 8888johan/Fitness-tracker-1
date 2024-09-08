// Mock data for login and sign-up
let users = {};

// Show Login Form
function showLogin() {
    let email = prompt("Enter your email:");
    let password = prompt("Enter your password:");
    if (users[email] && users[email] === password) {
        document.getElementById('profile-info').innerText = `Logged in as: ${email}`;
    } else {
        alert("Invalid credentials");
    }
}

// Show Signup Form
function showSignup() {
    let email = prompt("Enter your email:");
    let password = prompt("Enter a password:");
    users[email] = password;
    alert("User created successfully! You can now log in.");
}

// Log workout data
document.getElementById('workout-form').addEventListener('submit', function (e) {
    e.preventDefault();
    let workout = document.getElementById('workout').value;
    let workoutLog = document.getElementById('workout-log');
    let logEntry = document.createElement('p');
    logEntry.textContent = workout;
    workoutLog.appendChild(logEntry);
    document.getElementById('workout').value = '';
});
