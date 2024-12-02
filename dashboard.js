document.addEventListener('DOMContentLoaded', function() {
    // Update user name
    document.getElementById('user-name').textContent = 'John Doe'; // Replace with actual user name

    // Toggle mobile menu
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    
    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Simulate loading real-time stats
    function updateStats() {
        document.getElementById('available-orders').textContent = Math.floor(Math.random() * 20);
        document.getElementById('online-writers').textContent = Math.floor(Math.random() * 100);
        document.getElementById('posted-orders').textContent = Math.floor(Math.random() * 50);
        document.getElementById('remitted-funds').textContent = '$' + (Math.random() * 10000).toFixed(2);
        document.getElementById('offline-writers').textContent = Math.floor(Math.random() * 50);
    }

    updateStats();
    setInterval(updateStats, 60000); // Update every minute

    // Wallet button click event
    document.getElementById('wallet-btn').addEventListener('click', function() {
        alert('Wallet balance: $100');
    });

    // Notifications button click event
    document.getElementById('notifications-btn').addEventListener('click', function() {
        alert('You have 3 new notifications');
    });

    // Logout button click event
    document.getElementById('logout-btn').addEventListener('click', function() {
        if (confirm('Are you sure you want to logout?')) {
            alert('Logged out successfully');
            // Redirect to login page or perform logout action
        }
    });

    // Active link highlighting
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
});








