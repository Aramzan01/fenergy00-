// Smooth scroll for anchor links
document.querySelectorAll('a.nav-link[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Animate elements on scroll (simple fade-in)
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.wow, .fadeIn').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Add fade-in CSS (injects if not present)
if (!document.getElementById('fade-in-style')) {
    const style = document.createElement('style');
    style.id = 'fade-in-style';
    style.innerHTML = `
    .fade-in { opacity: 0; transform: translateY(30px); transition: opacity 0.8s, transform 0.8s; }
    .fade-in-visible { opacity: 1 !important; transform: none !important; }
    `;
    document.head.appendChild(style);
}