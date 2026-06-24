/* =========================================
   MY-VMS Script — Interactions & Animations
   ========================================= */

(function () {
    'use strict';

    /* ---- Navbar scroll effect ---- */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });

    /* ---- Mobile hamburger menu ---- */
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    let menuOpen = false;

    function toggleMenu(open) {
        menuOpen = open;
        mobileMenu.classList.toggle('open', open);
        hamburger.setAttribute('aria-expanded', String(open));
        document.body.style.overflow = open ? 'hidden' : '';

        const spans = hamburger.querySelectorAll('span');
        if (open) {
            spans[0].style.transform = 'translateY(7px) rotate(45deg)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    }

    hamburger.addEventListener('click', () => toggleMenu(!menuOpen));

    document.querySelectorAll('.mobile-link, .mobile-menu .btn').forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });

    /* ---- Intersection Observer for scroll animations ---- */
    const animatables = document.querySelectorAll('[data-animate]');
    if (animatables.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        animatables.forEach(el => observer.observe(el));
    }

    /* ---- Active nav link highlighting on scroll ---- */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.toggle('active',
                        link.getAttribute('href') === `#${id}`
                    );
                });
            }
        });
    }, { threshold: 0.35 });

    sections.forEach(s => sectionObserver.observe(s));

    /* ---- FAQ Accordion ---- */
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const btn = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        btn.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');

            // Close all
            faqItems.forEach(fi => {
                fi.classList.remove('open');
                fi.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                fi.querySelector('.faq-answer').classList.remove('open');
            });

            // Open clicked (if it was closed)
            if (!isOpen) {
                item.classList.add('open');
                btn.setAttribute('aria-expanded', 'true');
                answer.classList.add('open');
            }
        });
    });

    /* ---- Smooth scroll for anchor links ---- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const navbarHeight = navbar.offsetHeight;
                const targetTop = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 16;
                window.scrollTo({ top: targetTop, behavior: 'smooth' });
            }
        });
    });

    /* ---- Hero counter animation ---- */
    function animateCounter(el, target, suffix = '', duration = 1500, prefix = '') {
        const start = 0;
        const startTime = performance.now();
        const isFloat = target % 1 !== 0;

        function step(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
            const value = start + (target - start) * eased;
            const formattedValue = isFloat ? value.toFixed(1) : Math.floor(value);
            el.textContent = prefix + formattedValue + suffix;
            if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    // Animate hero stats when they come into view
    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    statsObserver.disconnect();
                    const statValues = document.querySelectorAll('.stat-value');
                    const targets = [100, 2, 4];
                    const suffixes = ['+', 's', 'x'];
                    const prefixes = ['', '<', ''];
                    statValues.forEach((el, i) => {
                        setTimeout(() => {
                            animateCounter(el, targets[i], suffixes[i], 1200, prefixes[i]);
                        }, i * 100);
                    });
                }
            });
        }, { threshold: 0.5 });
        statsObserver.observe(statsSection);
    }

    /* ---- Parallax tilt effect for mockup ---- */
    const mockup = document.querySelector('.dashboard-mockup');
    const heroVisual = document.querySelector('.hero-visual');
    if (mockup && heroVisual && window.innerWidth > 768) {
        heroVisual.addEventListener('mousemove', (e) => {
            const rect = heroVisual.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            mockup.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 5}deg)`;
        });
        heroVisual.addEventListener('mouseleave', () => {
            mockup.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
        });
        mockup.style.transition = 'transform 0.15s ease-out';
    }

    /* ---- Add subtle typing effect to the hero badge ---- */
    const heroBadge = document.querySelector('.hero-badge');
    if (heroBadge) {
        heroBadge.style.opacity = '0';
        heroBadge.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            heroBadge.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            heroBadge.style.opacity = '1';
            heroBadge.style.transform = 'translateY(0)';
        }, 200);
    }

    /* ---- Navbar active state for current section highlight ---- */
    const addActiveStyles = () => {
        const style = document.createElement('style');
        style.textContent = `
            .nav-link.active {
                color: var(--white) !important;
                background: rgba(59,130,246,0.1) !important;
            }
        `;
        document.head.appendChild(style);
    };
    addActiveStyles();

    /* ---- Feature card hover ripple ---- */
    document.querySelectorAll('.feature-card, .industry-card, .tech-card').forEach(card => {
        card.addEventListener('mouseover', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            this.style.setProperty('--mouse-x', `${x}px`);
            this.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    console.log('%cMy-VMS Enterprise Platform', 'color:#3B82F6;font-size:16px;font-weight:bold;');
    console.log('%cBuilt for operators who need reliability, not complexity.', 'color:#64748B;font-size:12px;');

})();
