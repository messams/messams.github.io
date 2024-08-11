// JavaScript for section navigation
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.link');
    const sections = document.querySelectorAll('section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add active class to the clicked link
            this.classList.add('active');

            // Get the target section
            const targetSection = document.getElementById(this.dataset.section);

            // Hide all sections
            sections.forEach(section => section.classList.remove('active'));

            // Show the target section
            targetSection.classList.add('active');
        });
    });

    // Optionally, set the first link as active by default
    navLinks[0].classList.add('active');
    sections[0].classList.add('active');
});
