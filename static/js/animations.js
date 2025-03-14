// Animations and UI Enhancements for Persona

// Page Loader
document.addEventListener('DOMContentLoaded', function() {
    // Create loader element
    const loaderContainer = document.createElement('div');
    loaderContainer.className = 'loader-container';
    loaderContainer.innerHTML = '<div class="loader"></div>';
    document.body.appendChild(loaderContainer);

    // Hide loader after page loads
    setTimeout(function() {
        loaderContainer.style.opacity = '0';
        setTimeout(function() {
            loaderContainer.style.display = 'none';
        }, 500);
    }, 800);

    // Apply animations to elements
    applyAnimations();
    
    // Initialize toast notifications
    initToasts();
    
    // Add modern card effects
    applyCardEffects();
});

// Apply animations to elements based on their classes
function applyAnimations() {
    // Animate header elements
    const header = document.querySelector('.header');
    if (header) {
        header.classList.add('animate-fadeIn');
    }
    
    // Animate room list items with staggered delay
    const roomItems = document.querySelectorAll('.roomListRoom');
    if (roomItems.length > 0) {
        roomItems.forEach((item, index) => {
            item.classList.add('animate-slideInBottom');
            item.style.animationDelay = `${index * 0.1}s`;
        });
    }
    
    // Animate activity items
    const activityItems = document.querySelectorAll('.activities__box');
    if (activityItems.length > 0) {
        activityItems.forEach((item, index) => {
            item.classList.add('animate-slideInRight');
            item.style.animationDelay = `${index * 0.1}s`;
        });
    }
    
    // Animate topic items
    const topicItems = document.querySelectorAll('.topics__list li');
    if (topicItems.length > 0) {
        topicItems.forEach((item, index) => {
            item.classList.add('animate-slideInLeft');
            item.style.animationDelay = `${index * 0.05}s`;
        });
    }
    
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn');
    if (buttons.length > 0) {
        buttons.forEach(btn => {
            btn.classList.add('hover-scale');
        });
    }
}

// Initialize toast notifications
function initToasts() {
    // Check for Django messages and convert them to toasts
    const djangoMessages = document.querySelector('.message');
    if (djangoMessages) {
        const messages = djangoMessages.querySelectorAll('li');
        messages.forEach((message, index) => {
            showToast(message.textContent, determineMessageType(message.textContent), index * 1000);
        });
        // Remove the original messages container
        djangoMessages.style.display = 'none';
    }
}

// Show a toast notification
function showToast(message, type = 'info', delay = 0) {
    setTimeout(() => {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        document.body.appendChild(toast);
        
        // Show the toast
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);
        
        // Hide and remove the toast after 5 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 5000);
    }, delay);
}

// Determine the type of message for appropriate toast styling
function determineMessageType(message) {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('error') || lowerMessage.includes('failed') || lowerMessage.includes('invalid')) {
        return 'error';
    } else if (lowerMessage.includes('success') || lowerMessage.includes('created') || lowerMessage.includes('updated') || lowerMessage.includes('deleted')) {
        return 'success';
    } else {
        return 'info';
    }
}

// Apply modern card effects
function applyCardEffects() {
    // Add modern card effect to room boxes
    const roomBoxes = document.querySelectorAll('.roomListRoom');
    if (roomBoxes.length > 0) {
        roomBoxes.forEach(box => {
            box.classList.add('modern-card');
        });
    }
    
    // Add glass effect to certain elements
    const glassElements = document.querySelectorAll('.layout__box');
    if (glassElements.length > 0) {
        glassElements.forEach(element => {
            element.classList.add('glass-effect');
        });
    }
    
    // Add hover glow to avatars
    const avatars = document.querySelectorAll('.avatar');
    if (avatars.length > 0) {
        avatars.forEach(avatar => {
            avatar.classList.add('hover-glow');
        });
    }
}

// Function to create skeleton loading for rooms
function createSkeletonLoading(container, count = 3) {
    for (let i = 0; i < count; i++) {
        const skeleton = document.createElement('div');
        skeleton.className = 'roomListRoom skeleton';
        skeleton.innerHTML = `
            <div style="display: flex; align-items: center; margin-bottom: 15px;">
                <div class="skeleton-avatar"></div>
                <div style="margin-left: 15px; flex: 1;">
                    <div class="skeleton-text"></div>
                    <div class="skeleton-text"></div>
                </div>
            </div>
            <div class="skeleton-text"></div>
            <div class="skeleton-text"></div>
        `;
        container.appendChild(skeleton);
    }
}

// Function to show loading state when navigating or submitting forms
function showLoading() {
    const loaderContainer = document.createElement('div');
    loaderContainer.className = 'loader-container';
    loaderContainer.id = 'navigation-loader';
    loaderContainer.innerHTML = '<div class="loader"></div>';
    document.body.appendChild(loaderContainer);
}

// Add loading state to all links and forms
document.addEventListener('DOMContentLoaded', function() {
    // Add loading to links (except those with no-loader class)
    const links = document.querySelectorAll('a:not(.no-loader)');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Don't show loader for links that open in new tab or have javascript actions
            if (link.target === '_blank' || link.href.includes('javascript:') || link.href === '#') {
                return;
            }
            showLoading();
        });
    });
    
    // Add loading to forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function() {
            showLoading();
        });
    });
    
    // Add typing animation to message input
    const messageInput = document.querySelector('.room__message input');
    if (messageInput) {
        messageInput.classList.add('typing-animation');
    }
});

// Function to create a ripple effect on button click
function createRipple(event) {
    const button = event.currentTarget;
    
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');
    
    const ripple = button.querySelector('.ripple');
    if (ripple) {
        ripple.remove();
    }
    
    button.appendChild(circle);
}

// Add ripple effect to all buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
    });
}); 