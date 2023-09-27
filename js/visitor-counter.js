// Check if the visitorCount key exists in local storage
if (localStorage.getItem('visitorCount') === null) {
    // If it doesn't exist, initialize it to 0
    localStorage.setItem('visitorCount', '0');
}

// Get the current visitor count from local storage
const currentVisitorCount = parseInt(localStorage.getItem('visitorCount'));

// Update the HTML element with the visitor count
document.getElementById('visitorCount').textContent = currentVisitorCount;

// Increment the visitor count and update local storage when the page loads
localStorage.setItem('visitorCount', (currentVisitorCount + 1).toString());
