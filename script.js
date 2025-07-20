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