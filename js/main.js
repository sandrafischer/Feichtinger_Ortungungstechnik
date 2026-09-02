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

});