
// Smooth scroll for internal links (if you add navigation later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form alert (optional)
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload
    alert('Thank you! Your message has been sent.');
    form.reset();
});