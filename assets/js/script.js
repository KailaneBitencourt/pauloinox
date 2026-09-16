const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
        const isOpen = mainNav.classList.toggle('is-open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    mainNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('is-open');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

const revealSelectors = [
    '.hero-copy > *',
    '.hero-visual > .visual-card',
    '.stat-item',
    '.about-copy',
    '.about-image',
    '.service-heading',
    '.catalog-card',
    '.commitment-box',
    '.contact-copy',
    '.contact-form'
];

const revealItems = document.querySelectorAll(revealSelectors.join(', '));

if (revealItems.length) {
    document.body.classList.add('reveal-ready');

    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.14,
            rootMargin: '0px 0px -8% 0px'
        });

        revealItems.forEach((item) => {
            item.classList.add('reveal-item', 'reveal-stagger');
            revealObserver.observe(item);
        });
    } else {
        revealItems.forEach((item) => item.classList.add('reveal-item', 'is-visible'));
    }
}
