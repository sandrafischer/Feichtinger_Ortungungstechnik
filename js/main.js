document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. Mobile Navigation Toggle
       ========================================= */
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (navToggle && navMenu) {
        // Öffnen / Schließen per Hamburger Button
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('open');
        });

        // Menü schließen, sobald ein Link geklickt wird
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('open');
            });
        });
    }

    /* =========================================
       2. Back to Top Button (Smooth Scroll)
       ========================================= */
    const btnScrollTop = document.querySelector('.btn-scroll-top');
    if (btnScrollTop) {
        btnScrollTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /* =========================================
       3. Kontaktformular & Lottie-Trigger
       ========================================= */
    const contactForm = document.getElementById('contactForm');
    const btnSubmit = document.getElementById('btnSubmitContact');
    const mascotPeekContainer = document.getElementById('contact-mascot-peek');
    const formPeekLottie = document.getElementById('formPeekLottie');

    if (contactForm && btnSubmit) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // 1. Button Feedback
            btnSubmit.textContent = 'Danke – wir melden uns!';
            btnSubmit.classList.add('submitted');
            btnSubmit.disabled = true;

            // 2. Peeking Maskottchen einblenden & 1x abspielen
            if (mascotPeekContainer && formPeekLottie) {
                mascotPeekContainer.style.opacity = '1';

                // Falls Lottie-Player geladen ist
                if (typeof formPeekLottie.stop === 'function') {
                    formPeekLottie.stop();
                    formPeekLottie.play();
                }
            }
        });
    }


    // --- SCROLL REVEAL OBSERVER ---
    const feichtingerTargets = document.querySelectorAll(
        '.hero-usp-pill-container, .service-card, .about-mascot-card, .process-step, .contact-card, .faq-item, .section-header'
    );

// 1. Automatisch Startklasse vergeben (kein manuelles HTML-Anpassen nötig)
    feichtingerTargets.forEach(el => el.classList.add('scroll-reveal'));

// 2. Sichtbarkeit beim Scrollen aktivieren
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    feichtingerTargets.forEach(el => scrollObserver.observe(el));

});