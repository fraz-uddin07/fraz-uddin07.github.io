// script.js

// Array of phrases to cycle through
const phrases = [
    "Software Engineer",
    "Gamer",
    "Anime Lover",
    "Technology Enthusiast"
];

// Get the subtitle wrapper element
const subtitleWrapper = document.querySelector('.subtitle-wrapper');

// Function to cycle through phrases with slide-up animation
function animateSubtitle() {
    let index = 0;
    setInterval(() => {
        const oldText = document.querySelector('.subtitle-text');
        const newText = document.createElement('div');  
        
        newText.classList.add('subtitle-text');
        newText.textContent = phrases[index];
        subtitleWrapper.appendChild(newText);

        // Force reflow to ensure the new text is positioned off-screen before animating
        newText.offsetHeight; // Trigger reflow

        oldText && oldText.classList.remove('show');
        newText.classList.add('show');
        
        index = (index + 1) % phrases.length; // Move to the next phrase
        
        // Remove the old text after animation
        setTimeout(() => {
            oldText && oldText.remove();
        }, 500); // Match this with the animation duration
    }, 2000); // Time between text changes (500ms for animation + 1500ms for text display)
}

// Start the animation when the page loads
document.addEventListener('DOMContentLoaded', animateSubtitle);

document.addEventListener('DOMContentLoaded', function() {
    const projectItems = document.querySelectorAll('.project-item');
    const projectsSection = document.getElementById('projects');

    function resetAnimations() {
        projectItems.forEach(item => {
            item.classList.remove('animate');
            void item.offsetWidth; // Trigger reflow
            item.classList.add('animate');
        });
    }

    projectsSection.addEventListener('mouseenter', resetAnimations);
});


document.addEventListener('DOMContentLoaded', function() {
    const projectItems = document.querySelectorAll('.project-item');
    const projectsSection = document.getElementById('projects');

    function resetAnimations() {
        projectItems.forEach(item => {
            item.classList.remove('animate');
            void item.offsetWidth; // Trigger reflow
            item.classList.add('animate');
        });
    }

    projectsSection.addEventListener('mouseenter', resetAnimations);
});