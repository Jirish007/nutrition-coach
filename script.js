// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

const form = document.querySelector('form');
const formMessage = document.getElementById('formMessage');
const isNetlify = location.hostname.includes("netlify.app");

form.addEventListener('submit', function(e) {
  if (isNetlify) {
    e.preventDefault();
    formMessage.textContent = "Form is currently offline. Please try again later.";
    return;
  }

  e.preventDefault();

  // Show alert and reset after successful "local" submission
  alert("Thanks! We'll reach out soon.");
  this.reset();

  // Optionally here you could add AJAX to submit to submit.php
  // But this basic setup submits normally on server that supports PHP
});
