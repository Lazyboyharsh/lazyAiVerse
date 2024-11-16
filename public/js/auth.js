document.addEventListener('DOMContentLoaded', () => {
    const loginTab = document.getElementById('login-tab');
    const signupTab = document.getElementById('signup-tab');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
  
    // Toggle between Login and Signup
    loginTab.addEventListener('click', () => {
      loginForm.classList.remove('hidden');
      signupForm.classList.add('hidden');
      loginTab.classList.add('active');
      signupTab.classList.remove('active');
    });
  
    signupTab.addEventListener('click', () => {
      signupForm.classList.remove('hidden');
      loginForm.classList.add('hidden');
      signupTab.classList.add('active');
      loginTab.classList.remove('active');
    });
  
    // Handle Login Form Submission
    loginForm.addEventListener('submit', async (event) => {
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
          alert(result.message);
          window.location.href = 'index.html'; // Redirect after successful login
        } else {
          alert(result.message);
        }
      } catch (error) {
        console.error('Error during login:', error);
        alert('Something went wrong!');
      }
    });
  
    // Handle Signup Form Submission
    signupForm.addEventListener('submit', async (event) => {
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
          alert(result.message);
          signupForm.reset(); // Clear the form
        } else {
          alert(result.message);
        }
      } catch (error) {
        console.error('Error during signup:', error);
        alert('Something went wrong!');
      }
    });
  });
  