const authForm = document.getElementById('auth-form');
const formTitle = document.getElementById('form-title');
const actionBtn = document.getElementById('action-btn');
const toggleText = document.getElementById('toggle-text');
const toggleLink = document.getElementById('toggle-link');
const message = document.getElementById('message');

let isRegistering = true; // Toggle between Register and Login
let users = {}; // Temporary storage for registered users

toggleLink.addEventListener('click', () => {
    isRegistering = !isRegistering;
    updateForm();
});

authForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (isRegistering) {
        if (users[username]) {
            message.textContent = 'User already exists!';
            message.style.color = 'red';
        } else {
            users[username] = password;
            message.textContent = 'Registration successful! You can now log in.';
            message.style.color = 'green';
        }
    } else {
        if (users[username] && users[username] === password) {
            // Redirect to Dashboard
            window.location.href = 'dashboard.html';
        } else {
            message.textContent = 'Invalid username or password!';
            message.style.color = 'red';
        }
    }

    authForm.reset();
});

function updateForm() {
    if (isRegistering) {
        formTitle.textContent = 'Register';
        actionBtn.textContent = 'Register';
        toggleText.innerHTML = 'Already have an account? <span id="toggle-link">Login</span>';
    } else {
        formTitle.textContent = 'Login';
        actionBtn.textContent = 'Login';
        toggleText.innerHTML = 'Don’t have an account? <span id="toggle-link">Register</span>';
    }
}
