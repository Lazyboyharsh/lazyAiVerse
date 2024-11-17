document.addEventListener('DOMContentLoaded', () => {
  const loginTab = document.getElementById('login-tab');
  const signupTab = document.getElementById('signup-tab');
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const loginBtn = document.getElementById('login-btn');
  const userSection = document.getElementById('user-section');
  const usernameBtn = document.getElementById('username-btn');
  const logoutBtn = document.getElementById('logout-btn');
  const userMenu = document.getElementById('user-menu');

  const isLoggedIn = () => {
    return localStorage.getItem('username') !== null;
  };

  const showAlert = (message, duration = 9000) => {
    const alertBox = document.getElementById('custom-alert');
    const alertMessage = document.getElementById('alert-message');

    if (alertBox && alertMessage) {
      alertMessage.textContent = message;
      alertBox.classList.add('show');

      setTimeout(() => {
        alertBox.classList.remove('show');
      }, duration);
    }
  };

  const updateNavbar = () => {
    console.log('Updating Navbar...');
    if (isLoggedIn()) {
      loginBtn?.classList.add('hidden');
      userSection?.classList.remove('hidden');
      usernameBtn.textContent = localStorage.getItem('username'); // Display the username
    } else {
      loginBtn?.classList.remove('hidden');
      userSection?.classList.add('hidden');
    }
  };

  // Switch between Login and Signup forms
  loginTab?.addEventListener('click', () => {
    loginForm?.classList.remove('hidden');
    signupForm?.classList.add('hidden');
    loginTab?.classList.add('active');
    signupTab?.classList.remove('active');
  });

  signupTab?.addEventListener('click', () => {
    signupForm?.classList.remove('hidden');
    loginForm?.classList.add('hidden');
    signupTab?.classList.add('active');
    loginTab?.classList.remove('active');
  });

  // Handle Login Form Submission
  loginForm?.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem('username', result.user.username); // Save username in local storage
        showAlert(result.message, 9000);
        window.location.href = 'index.html'; // Redirect to home
      } else {
        showAlert(result.message, 9000);
      }
    } catch (error) {
      console.error('Error during login:', error);
      showAlert('Something went wrong!', 9000);
    }
  });

  // Handle Signup Form Submission
  signupForm?.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const email = document.getElementById('signup-email').value;

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, email }),
      });

      const result = await response.json();

      if (response.ok) {
        showAlert(result.message, 3000);
        signupForm.reset(); // Clear form fields
        loginTab.click(); // Switch to the login tab after successful signup
      } else {
        showAlert(result.message, 9000);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      showAlert('Something went wrong!', 9000);
    }
  });

  // Handle Logout
  logoutBtn?.addEventListener('click', () => {
    localStorage.removeItem('username'); // Remove username from localStorage
    showAlert('Logged out successfully', 9000);
    updateNavbar(); // Update navbar after logout
    window.location.href = 'landing.html'; // Redirect to landing page
  });

  // Handle Username Dropdown Menu
  if (usernameBtn && userMenu) {
    usernameBtn.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent click from propagating
      userMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', (event) => {
      if (!userMenu.contains(event.target) && !usernameBtn.contains(event.target)) {
        userMenu.classList.add('hidden');
      }
    });
  } else {
    console.error('Dropdown elements not found in the DOM');
  }

  // Initialize Navbar on Page Load
  updateNavbar();
});
