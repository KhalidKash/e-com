// Elements
const signinBtn = document.getElementById('signin-btn');
const signinMenu = document.getElementById('signin-menu');
const authModal = document.getElementById('auth-modal');
const closeAuth = document.getElementById('close-auth');
const accountModal = document.getElementById('account-modal');
const closeAccount = document.getElementById('close-account');
const accountGreeting = document.getElementById('account-greeting');

// Show Auth Modal
signinBtn.addEventListener('click', () => {
  authModal.classList.remove('hidden');
});

// Close Auth Modal
closeAuth.addEventListener('click', () => {
  authModal.classList.add('hidden');
});

// Sign Up
document.getElementById('signup-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('signup-username').value;
  const password = document.getElementById('signup-password').value;
  localStorage.setItem('user', JSON.stringify({ username, password }));
  alert('Sign up successful!');
  e.target.reset();
});

// Login
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  const stored = JSON.parse(localStorage.getItem('user'));

  if (stored && stored.username === username && stored.password === password) {
    localStorage.setItem('loggedInUser', username);
    alert('Login successful!');
    authModal.classList.add('hidden');
  } else {
    alert('Invalid login credentials.');
  }
});

// Show Account Modal
signinMenu.querySelectorAll('a')[1].addEventListener('click', () => {
  const user = localStorage.getItem('loggedInUser');
  if (user) {
    accountGreeting.textContent = `Hello, ${user}!`;
    accountModal.classList.remove('hidden');
  } else {
    alert('Please log in first.');
  }
});

// Close Account Modal
closeAccount.addEventListener('click', () => {
  accountModal.classList.add('hidden');
});


// Cart Modal