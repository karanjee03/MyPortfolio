/**
 * Portfolio Website Script
 * Handles section switching and provides smooth transitions
 */

// DOM Elements
const sections = {
  home: document.getElementById('home-section'),
  about: document.getElementById('about-section'),
  contact: document.getElementById('contact-section')
};

const buttons = {
  home: document.getElementById('home-btn'),
  about: document.getElementById('about-btn'),
  contact: document.getElementById('contact-btn')
};

/**
 * Show a specific section and update active button
 * @param {string} sectionId - The ID of the section to show
 */
function showSection(sectionId) {
  // Hide all sections
  Object.values(sections).forEach(section => {
    section.classList.remove('active-section');
  });

  // Remove active class from all buttons
  Object.values(buttons).forEach(button => {
    button.classList.remove('active');
  });

  // Show the selected section and mark button as active
  sections[sectionId].classList.add('active-section');
  buttons[sectionId].classList.add('active');
}

// Initialize the page with Home section visible
document.addEventListener('DOMContentLoaded', () => {
  showSection('home');
  
  // Add smooth transition after page load to prevent initial animation
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.3s ease';
  }, 300);
});

/**
 * Handle email link clicks
 */
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = e.target.href;
  });
});