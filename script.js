
// Navigation menu toggle for mobile
document.querySelector('.nav-toggle').addEventListener('click', function () {
  const menu = document.querySelector('.nav-menu');
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    menu.style.display = 'block';
  } else {
    menu.classList.add('hidden');
    menu.style.display = 'none';
  }
});

// Show navigation menu on desktop
function updateNavVisibility() {
  const menu = document.querySelector('.nav-menu');
  if (window.innerWidth >= 768) {
    menu.classList.remove('hidden');
    menu.style.display = 'flex';
  } else {
    menu.classList.add('hidden');
    menu.style.display = 'none';
  }
}

// Update navigation visibility on window resize
window.addEventListener('resize', updateNavVisibility);
updateNavVisibility();

// Timeline animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.timeline-item').forEach(item => {
  observer.observe(item);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});