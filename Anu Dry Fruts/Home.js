document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Simulate form submission (replace with actual submission logic)
        setTimeout(function () {
            successMessage.classList.remove('hidden');
            contactForm.reset();
        }, 1000);
    });
});
