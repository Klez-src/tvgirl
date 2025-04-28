// Optional: Add any JavaScript functionality here
document.addEventListener("DOMContentLoaded", function() {
    const animatedTexts = document.querySelectorAll('.animated-text');
    animatedTexts.forEach((text, index) => {
        text.style.animationDelay = `${index * 0.2}s`;
        text.style.opacity = 1; // Make text visible after animation
    });
});
