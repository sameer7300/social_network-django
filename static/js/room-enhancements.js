// Room Enhancements

document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on a room page
    if (isRoomPage()) {
        enhanceRoomPage();
    }
});

// Check if the current page is a room page
function isRoomPage() {
    return window.location.pathname.includes('/room/');
}

// Enhance the room page with additional features
function enhanceRoomPage() {
    // Add send button to message form
    addSendButton();
    
    // Add typing indicator
    setupTypingIndicator();
    
    // Add new message notification
    setupNewMessageNotification();
    
    // Add message reactions
    addMessageReactions();
    
    // Add message options
    addMessageOptions();
    
    // Scroll to bottom on load
    scrollToBottom();
}

// Add a send button to the message form
function addSendButton() {
    const messageForm = document.querySelector('.room__message > form');
    if (messageForm) {
        // Create send button
        const sendButton = document.createElement('button');
        sendButton.type = 'submit';
        sendButton.innerHTML = '<i class="fas fa-paper-plane"></i>';
        sendButton.title = 'Send message';
        
        // Add button to form
        messageForm.appendChild(sendButton);
        
        // Adjust input padding to make room for button
        const input = messageForm.querySelector('input');
        if (input) {
            input.style.paddingRight = '50px';
        }
    }
}

// Setup typing indicator
function setupTypingIndicator() {
    const conversationThread = document.querySelector('.room__conversation');
    const messageInput = document.querySelector('.room__message input');
    
    if (conversationThread && messageInput) {
        // Create typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'typing-indicator';
        typingIndicator.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
        typingIndicator.style.display = 'none';
        
        // Add to conversation
        conversationThread.appendChild(typingIndicator);
        
        // Show typing indicator randomly to simulate other users typing
        setInterval(() => {
            // Only show sometimes (20% chance)
            if (Math.random() < 0.2) {
                typingIndicator.style.display = 'flex';
                
                // Hide after random time
                setTimeout(() => {
                    typingIndicator.style.display = 'none';
                }, Math.random() * 3000 + 1000);
            }
        }, 10000);
    }
}

// Setup new message notification
function setupNewMessageNotification() {
    const roomBox = document.querySelector('.room__box');
    
    if (roomBox) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'new-messages-notification';
        notification.innerHTML = '<i class="fas fa-arrow-down"></i> New messages';
        
        // Add to room box
        roomBox.appendChild(notification);
        
        // Show notification when new messages arrive and user has scrolled up
        roomBox.addEventListener('scroll', function() {
            // If user has scrolled up (not at bottom)
            if (roomBox.scrollHeight - roomBox.scrollTop - roomBox.clientHeight > 100) {
                // Show notification (simulating new message)
                if (Math.random() < 0.1) {
                    notification.classList.add('show');
                }
            } else {
                // Hide notification when at bottom
                notification.classList.remove('show');
            }
        });
        
        // Scroll to bottom when notification is clicked
        notification.addEventListener('click', function() {
            scrollToBottom();
            notification.classList.remove('show');
        });
    }
}

// Add reaction buttons to messages
function addMessageReactions() {
    const messages = document.querySelectorAll('.thread__details');
    
    if (messages.length > 0) {
        messages.forEach(message => {
            // Create reactions container
            const reactionsContainer = document.createElement('div');
            reactionsContainer.className = 'message-reactions';
            
            // Add reaction buttons
            reactionsContainer.innerHTML = `
                <button class="reaction-button"><i class="fas fa-thumbs-up"></i> <span>0</span></button>
                <button class="reaction-button"><i class="fas fa-heart"></i> <span>0</span></button>
                <button class="reaction-button"><i class="fas fa-laugh"></i> <span>0</span></button>
            `;
            
            // Add to message
            message.appendChild(reactionsContainer);
            
            // Add click event to reaction buttons
            const reactionButtons = reactionsContainer.querySelectorAll('.reaction-button');
            reactionButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const countSpan = button.querySelector('span');
                    const currentCount = parseInt(countSpan.textContent);
                    countSpan.textContent = currentCount + 1;
                    
                    // Add animation
                    button.classList.add('animate-pulse');
                    setTimeout(() => {
                        button.classList.remove('animate-pulse');
                    }, 1000);
                });
            });
        });
    }
}

// Add options to messages
function addMessageOptions() {
    const threads = document.querySelectorAll('.thread');
    
    if (threads.length > 0) {
        threads.forEach(thread => {
            // Make thread position relative for absolute positioning of options
            thread.style.position = 'relative';
            
            // Create options container
            const optionsContainer = document.createElement('div');
            optionsContainer.className = 'message-options';
            
            // Add options buttons
            optionsContainer.innerHTML = `
                <button title="Reply"><i class="fas fa-reply"></i></button>
                <button title="Copy"><i class="fas fa-copy"></i></button>
            `;
            
            // Add to thread
            thread.appendChild(optionsContainer);
            
            // Add click event to copy button
            const copyButton = optionsContainer.querySelector('button[title="Copy"]');
            if (copyButton) {
                copyButton.addEventListener('click', function() {
                    const messageText = thread.querySelector('.thread__details').textContent;
                    navigator.clipboard.writeText(messageText)
                        .then(() => {
                            // Show toast notification
                            if (typeof showToast === 'function') {
                                showToast('Message copied to clipboard', 'success');
                            }
                        });
                });
            }
        });
    }
}

// Scroll to bottom of conversation
function scrollToBottom() {
    const roomBox = document.querySelector('.room__box');
    if (roomBox) {
        roomBox.scrollTop = roomBox.scrollHeight;
    }
} 