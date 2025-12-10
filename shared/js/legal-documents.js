// Legal Documents Shared JavaScript
// Used by Terms of Service and Privacy Policy pages

// Theme toggle functionality
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Update icon
    const icon = document.querySelector('.theme-icon');
    icon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
}

// Load saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    const icon = document.querySelector('.theme-icon');
    icon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

// Accordion functionality
function toggleSection(header) {
    const section = header.parentElement;
    section.classList.toggle('active');
}

// Smooth scroll to section
document.querySelectorAll('.toc a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Open the section if it's closed
        if (!targetSection.classList.contains('active')) {
            targetSection.classList.add('active');
        }

        // Scroll to section
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Update active link in TOC
        document.querySelectorAll('.toc a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');
    });
});

// Initialize theme on page load
loadTheme();

// Open first section (simple terms) by default
document.addEventListener('DOMContentLoaded', function() {
    const firstSection = document.getElementById('section-0');
    if (firstSection && !firstSection.classList.contains('active')) {
        firstSection.classList.add('active');
    }
});
