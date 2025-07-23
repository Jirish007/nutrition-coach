// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Optional: form submission placeholder
document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks! I will reach out soon.');
});
