document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const minimizeChat = document.querySelector('.minimize-chat');
    const chatWidget = document.querySelector('.chat-widget');
    const chatBody = document.querySelector('.chat-body');
    const chatInput = document.querySelector('.chat-input');
    const chatMessages = document.querySelector('.chat-messages');

    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });

    minimizeChat.addEventListener('click', function() {
        chatBody.style.display = chatBody.style.display === 'none' ? 'flex' : 'none';
    });

    chatInput.addEventListener('submit', function(e) {
        e.preventDefault();
        const input = this.querySelector('input');
        const message = input.value.trim();
        if (message) {
            addMessage('You', message);
            input.value = '';
            // Here you would typically send the message to your server
        }
    });

    function addMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Simulated real-time updates
    function updateStats() {
        document.getElementById('online-writers').textContent = Math.floor(Math.random() * 100);
        document.getElementById('offline-writers').textContent = Math.floor(Math.random() * 50);
        document.getElementById('posted-orders').textContent = Math.floor(Math.random() * 200);
        document.getElementById('pending-orders').textContent = Math.floor(Math.random() * 100);
    }

    setInterval(updateStats, 5000); // Update every 5 seconds
});