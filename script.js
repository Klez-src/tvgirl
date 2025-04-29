const discordLogo = document.getElementById('discord-logo');
const logoContainer = document.querySelector('.logo-container');
const coordinatesDiv = document.getElementById('coordinates');

let isDragging = false;
let currentX = 0;
let currentY = 0;

/**
 * Starts dragging the Discord logo.
 * @param e MouseEvent
 */
function startDragging(e) {
    isDragging = true;
    discordLogo.classList.add('dragging');
    updatePosition(e);
    e.preventDefault(); // Prevent default link behavior
}

/**
 * Updates the logo's position and coordinates during dragging.
 * @param e MouseEvent
 */
function updatePosition(e) {
    if (!isDragging) return;

    const containerRect = logoContainer.getBoundingClientRect();
    currentX = e.clientX - containerRect.left - discordLogo.offsetWidth / 2;
    currentY = e.clientY - containerRect.top - discordLogo.offsetHeight / 2;

    discordLogo.style.left = `${currentX}px`;
    discordLogo.style.top = `${currentY}px`;

    coordinatesDiv.textContent = `Coordinates: (x: ${Math.round(currentX)}, y: ${Math.round(currentY)})`;
}

/**
 * Stops dragging and logs final coordinates.
 */
function stopDragging() {
    if (isDragging) {
        isDragging = false;
        discordLogo.classList.remove('dragging');
        console.log(`Final Coordinates: (x: ${Math.round(currentX)}, y: ${Math.round(currentY)})`);
    }
}

// Event listeners
discordLogo.addEventListener('mousedown', startDragging);
document.addEventListener('mousemove', updatePosition);
document.addEventListener('mouseup', stopDragging);

// Prevent default link navigation during dragging
discordLogo.addEventListener('click', (e) => {
    if (currentX !== 0 || currentY !== 0) {
        e.preventDefault(); // Prevent navigation if logo was moved
    }
});
