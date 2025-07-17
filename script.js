// Elements
const signinBtn = document.getElementById('signin-btn');
const signinMenu = document.getElementById('signin-menu');
const authModal = document.getElementById('auth-modal');
const closeAuth = document.getElementById('close-auth');

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

// Add to Cart operation
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.add-to-cart');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const title = button.dataset.title;
      const author = button.dataset.author;
      const price = button.dataset.price;

      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push({ title, author, price });
      localStorage.setItem('cart', JSON.stringify(cart));

      alert(`${title} added to cart`);
    });
  });
});