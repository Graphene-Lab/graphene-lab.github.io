document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Logic
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Navbar Scroll Logic
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Hash Routing Logic
    const sections = {
        '#/': document.getElementById('home-page'),
        '#/privacy': document.getElementById('privacy-page'),
        '#/terms': document.getElementById('terms-page'),
        '#/licenses': document.getElementById('licenses-page')
    };

    function handleRouting() {
        const hash = window.location.hash || '#/';
        const isSectionLink = hash.startsWith('#') && !hash.startsWith('#/') && hash !== '#';

        // Determine target page
        const targetPage = sections[hash] || sections['#/'];

        // Get currently active page
        const currentlyActivePage = document.querySelector('.page.active');

        // Page switching logic
        if (currentlyActivePage !== targetPage) {
            // Hide all pages
            Object.values(sections).forEach(section => {
                if (section) section.classList.remove('active');
            });

            // Show target page
            targetPage.classList.add('active');

            if (isSectionLink) {
                // If switching to home for a section, scroll after a brief delay
                const targetId = hash.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    setTimeout(() => {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }, 150);
                }
            } else {
                window.scrollTo(0, 0);
            }
        } else {
            // Already on the correct page
            if (isSectionLink) {
                const targetId = hash.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                window.scrollTo(0, 0);
            }
        }
    }

    window.addEventListener('hashchange', handleRouting);
    handleRouting(); // Initialize on load

    // Ensure links work even if hash doesn't change
    document.querySelectorAll('.nav-links a, .logo, .footer-links a').forEach(link => {
        link.addEventListener('click', () => {
            const href = link.getAttribute('href');
            if (href && href === window.location.hash) {
                handleRouting();
            }
        });
    });

    // Dynamic Footer Year
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
