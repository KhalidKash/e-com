document.addEventListener("DOMContentLoaded", () => {
  const signupBtn = document.querySelector('#signup-form button');
  const loginBtn = document.querySelector('#login-form button');

  signupBtn.addEventListener('click', () => {
    const signupInputs = document.querySelectorAll('#signup-form input');
    const emailOrPhone = signupInputs[0].value.trim();
    const password = signupInputs[1].value;
    const fullName = signupInputs[2].value.trim();
    const username = signupInputs[3].value.trim();

    if (!emailOrPhone || !password || !fullName || !username) {
      alert("Please fill in all signup fields.");
      return;
    }

    const user = {
      emailOrPhone,
      password,
      fullName,
      username
    };

    // Save user in localStorage using username as key
    localStorage.setItem(username, JSON.stringify(user));
    alert("Signup successful! You can now log in.");
    
    // Optionally clear inputs
    signupInputs.forEach(input => input.value = '');
  });

  loginBtn.addEventListener('click', () => {
    const loginInputs = document.querySelectorAll('#login-form input');
    const identifier = loginInputs[0].value.trim();
    const password = loginInputs[1].value;

    if (!identifier || !password) {
      alert("Please fill in both login fields.");
      return;
    }

    // Try to find user by username (we stored by username)
    const userData = localStorage.getItem(identifier);

    if (!userData) {
      alert("User not found.");
      return;
    }

    const user = JSON.parse(userData);
    
    if (user.password === password) {
      alert(`Welcome back, ${user.fullName || user.username}!`);
      // You can redirect here if needed
    } else {
      alert("Incorrect password.");
    }

    // Optionally clear inputs
    loginInputs.forEach(input => input.value = '');
  });
});