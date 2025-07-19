// This script enables smooth scrolling for anchor links.
document.addEventListener('DOMContentLoaded', () => {
    // Select all anchor links that point to an ID on the same page.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Prevent the default jump-to-anchor behavior.
            e.preventDefault();

            // Get the target element using the href attribute.
            const targetElement = document.querySelector(this.getAttribute('href'));

            // If the target element exists, scroll to it smoothly.
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
