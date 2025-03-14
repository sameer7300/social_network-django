// Theme Switching Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Create theme toggle button
    createThemeToggle();
    
    // Initialize theme from localStorage
    initializeTheme();
});

// Create theme toggle button
function createThemeToggle() {
    const themeToggle = document.createElement('div');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.addEventListener('click', toggleTheme);
    document.body.appendChild(themeToggle);
}

// Initialize theme from localStorage
function initializeTheme() {
    const currentTheme = localStorage.getItem('theme') || 'dark-theme';
    document.body.classList.add(currentTheme);
    updateThemeIcon(currentTheme);
}

// Toggle between light and dark themes
function toggleTheme() {
    const isDarkTheme = document.body.classList.contains('dark-theme');
    const newTheme = isDarkTheme ? 'light-theme' : 'dark-theme';
    
    // Remove current theme
    document.body.classList.remove(isDarkTheme ? 'dark-theme' : 'light-theme');
    
    // Add new theme
    document.body.classList.add(newTheme);
    
    // Save theme preference to localStorage
    localStorage.setItem('theme', newTheme);
    
    // Update theme icon
    updateThemeIcon(newTheme);
    
    // Show toast notification
    showThemeChangeToast(newTheme);
    
    // Add transition effect to body
    addThemeTransition();
}

// Update theme toggle icon based on current theme
function updateThemeIcon(theme) {
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.innerHTML = theme === 'dark-theme' 
            ? '<i class="fas fa-moon"></i>' 
            : '<i class="fas fa-sun"></i>';
    }
}

// Show toast notification for theme change
function showThemeChangeToast(theme) {
    const message = theme === 'dark-theme' 
        ? 'Dark theme activated' 
        : 'Light theme activated';
    
    // Check if showToast function exists (from animations.js)
    if (typeof showToast === 'function') {
        showToast(message, 'info');
    } else {
        // Fallback if showToast function is not available
        const toast = document.createElement('div');
        toast.className = `toast toast-info show`;
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }
}

// Add transition effect when changing themes
function addThemeTransition() {
    // Add transition class to body
    document.body.classList.add('theme-transition');
    
    // Remove transition class after animation completes
    setTimeout(() => {
        document.body.classList.remove('theme-transition');
    }, 1000);
    
    // Apply transition to all elements that should animate during theme change
    const elements = document.querySelectorAll('.layout__box, .roomListRoom, .activities__box, .topics__list li, .header');
    elements.forEach(element => {
        element.style.transition = 'background-color 0.5s ease, color 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease';
    });
} 