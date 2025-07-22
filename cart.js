// cart.js
document.addEventListener('DOMContentLoaded', () => {
  const cartContainer = document.getElementById('cart-items');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  function renderCart() {
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
      cartContainer.innerHTML = '<p>Your cart is empty.</p>';
      return;
    }

    cart.forEach((item, index) => {

      if (!item.quantity) item.quantity = 1;

      const itemDiv = document.createElement('div');
      itemDiv.classList.add('cart-item');
      itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.title}" width="100">
        <h3>${item.title}</h3>
        <p>${item.author}</p>
        <p>${item.price}</p>
        <div class="quantity-controls">
          <button class="decrease-qty" data-index="${index}">−</button>
          <span class="quantity">${item.quantity}</span>
          <button class="increase-qty" data-index="${index}">+</button>
        </div>
        <button data-index="${index}" class="remove-item">Remove</button>
      `;
      cartContainer.appendChild(itemDiv);
    });

    // Add event listeners for remove buttons
    document.querySelectorAll('.remove-item').forEach(button => {
      button.addEventListener('click', () => {
        const index = button.dataset.index;
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
      });
    });

    // Increase quantity
    document.querySelectorAll('.increase-qty').forEach(button => {
      button.addEventListener('click', () => {
        const index = button.dataset.index;
        cart[index].quantity += 1;
        saveCart();
      });
    });

    // Decrease quantity
    document.querySelectorAll('.decrease-qty').forEach(button => {
      button.addEventListener('click', () => {
        const index = button.dataset.index;
        if (cart[index].quantity > 1) {
          cart[index].quantity -= 1;
        } else {
          cart.splice(index, 1); // remove item if quantity hits 0
        }
        saveCart();
      });
    });
  }

  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
  }

  renderCart();
});
