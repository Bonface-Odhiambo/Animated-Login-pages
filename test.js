document.addEventListener('DOMContentLoaded', function() {
    // Chat widget elements
    const chatWidget = document.querySelector('.chat-widget');
    const chatHeader = document.querySelector('.chat-header');
    const chatBody = document.querySelector('.chat-body');
    const chatInput = document.querySelector('.chat-input');
    const chatMessages = document.querySelector('.chat-messages');

    // Toggle chat widget
    chatHeader.addEventListener('click', function() {
        chatWidget.classList.toggle('expanded');
        if (chatWidget.classList.contains('expanded')) {
            chatHeader.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            chatHeader.innerHTML = '<i class="fas fa-comment"></i>';
        }
    });

    // Handle chat input
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

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Login and Register form elements
    const loginForm = document.getElementById('login');
    const registerForm = document.getElementById('register');
    const btn = document.getElementById('btn');
    const notificationIcon = document.querySelector('.notification-icon');
    const notificationCount = document.querySelector('.notification-count');

    // Login and Register form toggle functions
    function login() {
        loginForm.style.left = "50px";
        registerForm.style.left = "450px";
        btn.style.left = "0";
    }

    function register() {
        loginForm.style.left = "-400px";
        registerForm.style.left = "50px";
        btn.style.left = "110px";
    }

    // Add event listeners to toggle buttons
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    toggleBtns[0].addEventListener('click', login);
    toggleBtns[1].addEventListener('click', register);

    // Simulated notification update
    let count = 0;
    notificationIcon.addEventListener('click', function() {
        count++;
        notificationCount.textContent = count;
    });

    // Simulated real-time updates for statistics
    function updateStats() {
        document.getElementById('online-writers').textContent = Math.floor(Math.random() * 100);
        document.getElementById('offline-writers').textContent = Math.floor(Math.random() * 50);
        document.getElementById('posted-orders').textContent = Math.floor(Math.random() * 200);
        document.getElementById('pending-orders').textContent = Math.floor(Math.random() * 100);
    }

    setInterval(updateStats, 5000); // Update every 5 seconds
});
