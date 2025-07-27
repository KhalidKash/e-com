// Add to Cart operation
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.add-to-cart');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const image = button.dataset.image;
      const title = button.dataset.title;
      const author = button.dataset.author;
      const price = button.dataset.price;

      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push({ image, title, author, price });
      localStorage.setItem('cart', JSON.stringify(cart));

      alert(`${title} added to cart`);
    });
  });
});

// Authentication
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login-form");
  const signupForm = document.querySelector("#signup-form");
  const loginBtn = loginForm.querySelector("button");
  const signupBtn = signupForm.querySelector("button");

  // Sign Up
  signupBtn.addEventListener("click", () => {
    const inputs = signupForm.querySelectorAll("input");
    const [email, password, fullName, username] = [...inputs].map(i => i.value.trim());

    if (email && password && fullName && username) {
      const user = { email, password, fullName, username };
      localStorage.setItem("user", JSON.stringify(user));
      alert("Sign up successful. Please log in.");
      signupForm.style.display = "none";
      loginForm.style.display = "flex";
    } else {
      alert("Please fill in all fields.");
    }
  });

  // Log In
  loginBtn.addEventListener("click", () => {
    const inputs = loginForm.querySelectorAll("input");
    const [loginId, password] = [...inputs].map(i => i.value.trim());
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && (loginId === storedUser.email || loginId === storedUser.username) && password === storedUser.password) {
      alert(`Welcome back, ${storedUser.fullName}!`);
    } else {
      alert("Invalid credentials. Please try again or sign up.");
    }
  });
});