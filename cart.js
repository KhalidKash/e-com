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
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('cart-item');
      itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.title}" width="100">
        <h3>${item.title}</h3>
        <p>${item.author}</p>
        <p>$${item.price}</p>
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
  }

  renderCart();
});
