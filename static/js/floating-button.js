// Floating Action Button for Creating Rooms

document.addEventListener('DOMContentLoaded', function() {
    // Only add the floating button on pages where it makes sense
    if (shouldShowFloatingButton()) {
        createFloatingButton();
    }
});

// Determine if the floating button should be shown on the current page
function shouldShowFloatingButton() {
    // Get the current URL path
    const path = window.location.pathname;
    
    // Show on home page, topics page, and profile pages
    return path === '/' || 
           path === '/topics/' || 
           path.includes('/profile/') ||
           path.includes('/activity/');
}

// Create and add the floating action button to the page
function createFloatingButton() {
    // Create the button element
    const floatingButton = document.createElement('a');
    floatingButton.href = '/create-room/';
    floatingButton.className = 'btn btn--primary btn--floating animate-pulse';
    floatingButton.setAttribute('title', 'Create a new room');
    floatingButton.innerHTML = '<i class="fas fa-plus"></i>';
    
    // Add the button to the body
    document.body.appendChild(floatingButton);
    
    // Add click event listener
    floatingButton.addEventListener('click', function(e) {
        // Add ripple effect
        createRipple(e);
        
        // Add loading animation when navigating
        showLoading();
    });
} 