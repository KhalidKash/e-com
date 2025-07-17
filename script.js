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
const cartBtn = document.querySelector('.cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeCart = document.getElementById('close-cart');
const cartItemsList = document.getElementById('cart-items');

// Open cart modal
cartBtn.addEventListener('click', () => {
  cartModal.classList.remove('hidden');
});

// Close cart modal
// closeCart.addEventListener('click', () => {
//   cartModal.classList.add('hidden');
// });

// // Add to cart
// document.querySelectorAll('.add-to-cart').forEach(button => {
//   button.addEventListener('click', () => {
//     const bookCard = button.closest('.book-card');
//     const title = bookCard.querySelector('.title').textContent;
//     const price = bookCard.querySelector('.price').textContent;
//     const imgSrc = bookCard.querySelector('img').getAttribute('src');

//     const listItem = document.createElement('li');
//     listItem.classList.add('cart-item');
//     listItem.innerHTML = `
//       <img src="${imgSrc}" alt="Book" class="cart-img" />
//       <div class="cart-info">
//         <p class="cart-title">${title}</p>
//         <p class="cart-price">${price}</p>
//         <div class="quantity-controls">
//           <button class="decrease">−</button>
//           <span class="quantity">1</span>
//           <button class="increase">+</button>
//         </div>
//       </div>
//       <button class="remove-item" title="Remove Item">Remove/button>
//     `;

//     // Quantity controls
//     const qtySpan = listItem.querySelector('.quantity');
//     listItem.querySelector('.increase').addEventListener('click', () => {
//       qtySpan.textContent = parseInt(qtySpan.textContent) + 1;
//     });
//     listItem.querySelector('.decrease').addEventListener('click', () => {
//       let qty = parseInt(qtySpan.textContent);
//       if (qty > 1) qtySpan.textContent = qty - 1;
//     });

//     // Delete item
//     listItem.querySelector('.remove-item').addEventListener('click', () => {
//       listItem.remove();
//     });

//     cartItemsList.appendChild(listItem);
//   });
// });