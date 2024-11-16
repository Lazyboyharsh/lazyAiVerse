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
  
    // Update Navbar Based on Login Status
    const updateNavbar = () => {
        if (isLoggedIn()) {
        loginBtn.classList.add('hidden');
        userSection.classList.remove('hidden');
        usernameBtn.textContent = localStorage.getItem('username'); // Display the username
        } else {
        loginBtn.classList.remove('hidden');
        userSection.classList.add('hidden');
        }
    };
  
    // Toggle between Login and Signup
    loginTab?.addEventListener('click', () => {
      loginForm.classList.remove('hidden');
      signupForm.classList.add('hidden');
      loginTab.classList.add('active');
      signupTab.classList.remove('active');
    });
  
    signupTab?.addEventListener('click', () => {
      signupForm.classList.remove('hidden');
      loginForm.classList.add('hidden');
      signupTab.classList.add('active');
      loginTab.classList.remove('active');
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
          alert(result.message);
          window.location.href = 'index.html'; // Redirect to home
        } else {
          alert(result.message);
        }
      } catch (error) {
        console.error('Error during login:', error);
        alert('Something went wrong!');
      }
    });
  
    // Handle Logout
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('username'); // Remove username from localStorage
        alert('Logged out successfully');
        updateNavbar(); // Update navbar after logout
        window.location.href = 'landing.html'; // Redirect to landing page
    });
  
    // Handle Username Menu Toggle
    usernameBtn?.addEventListener('click', () => {
      userMenu.classList.toggle('hidden');
    });
  
    // Initialize Navbar
    updateNavbar();
  });
  