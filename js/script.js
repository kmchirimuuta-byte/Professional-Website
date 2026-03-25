/* ── Mobile hamburger menu toggle ── */
document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.nav-toggle');
    var navLinks = document.querySelector('.top-links');

    if (toggle && navLinks) {
        toggle.addEventListener('click', function () {
            var isOpen = navLinks.classList.toggle('nav-open');
            toggle.classList.toggle('active', isOpen);
            toggle.setAttribute('aria-expanded', isOpen);
        });

        // Close mobile nav when a link is tapped
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navLinks.classList.remove('nav-open');
                toggle.classList.remove('active');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
});