// Function to toggle dark mode
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}

// Function to initialize dark mode toggle button
function initDarkModeToggle() {
    var darkModeToggle = document.getElementById("dark-mode-toggle");
    darkModeToggle.addEventListener("click", toggleDarkMode);
}

// Initialize dark mode toggle button
initDarkModeToggle();
