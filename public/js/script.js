const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.close-btn a');  // Close button link

// Toggle navbar visibility when hamburger is clicked
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('toggle');
});

// Close the navbar when the close button is clicked
closeBtn.addEventListener('click', () => {
  navLinks.classList.remove('active');
  hamburger.classList.remove('toggle');
});

// Close navbar when a link is clicked (for better UX on mobile)
const navItems = document.querySelectorAll('.nav-links li a:not(.close-btn a)');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      hamburger.classList.remove('toggle');
    }
  });
});



// Scroll Fade Animation for Features Section
window.addEventListener('scroll', function() {
  let elements = document.querySelectorAll('.feature-card, .tools-category');
  let windowHeight = window.innerHeight;
  elements.forEach(element => {
    let positionFromTop = element.getBoundingClientRect().top;
    if(positionFromTop - windowHeight <= 0) {
      element.classList.add('fade-in');
    }
  });
});

// GSAP Animations (Optional for Enhanced Effects)
gsap.from(".hero-title", { duration: 1.5, y: -100, opacity: 0, ease: "power2.out" });
gsap.from(".hero-description", { duration: 1.5, delay: 0.5, opacity: 0, ease: "power2.out" });
gsap.from(".hero-button", { duration: 1.5, delay: 1, opacity: 0, ease: "power2.out" });

// gsap.from(".hero-title", {duration: 1.5, y: 50, opacity: 0});
// gsap.from(".hero-description", {duration: 1.5, y: 50, opacity: 0, delay: 0.5});



// Additional GSAP Animations for Features and Tools (Optional)
gsap.utils.toArray('.feature-card, .tools-category').forEach((elem, index) => {
  gsap.from(elem, {
    scrollTrigger: {
      trigger: elem,
      start: "top 80%"
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    delay: index * 0.2
  });
});

// GSAP animation for About section (optional)
gsap.from(".about-content", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%"
  },
  duration: 1.5,
  opacity: 0,
  y: 50,
  ease: "power2.out"
});

// search bar

function searchFunction() {
  // Get the value of the search input
  let input = document.getElementById('searchBar').value.toLowerCase();
  
  // Get the list of items (assuming you have a list to filter)
  let items = document.getElementById('searchList').getElementsByTagName('li');
  
  // Loop through the list items and hide those that don't match the search query
  for (let i = 0; i < items.length; i++) {
    let item = items[i].textContent || items[i].innerText;
    if (item.toLowerCase().indexOf(input) > -1) {
      items[i].style.display = '';
    } else {
      items[i].style.display = 'none';
    }
  }

  // Prevent form submission (default action)
  return false;
}
