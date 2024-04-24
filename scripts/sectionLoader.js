document.addEventListener('DOMContentLoaded', (event) => {
    const clickableElements = document.querySelectorAll('nav a, .go-to-section-button');

    clickableElements.forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-target') || this.getAttribute('href').substring(1);
            showSection(targetSection);
        });
    });
});

function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });

    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
        targetElement.style.display = 'block';
    } else {
        console.error("No section found with ID:", sectionId);
    }
}
