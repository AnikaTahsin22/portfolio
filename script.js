document.addEventListener('DOMContentLoaded', () => {

    // --- Hamburger Menu Toggle ---
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');
    const links = navLinks.querySelectorAll('a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

 
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); 
            }
        });
    };

    const intersectionObserver = new IntersectionObserver(observerCallback, observerOptions);

    fadeElements.forEach(el => {
        intersectionObserver.observe(el);
    });

});