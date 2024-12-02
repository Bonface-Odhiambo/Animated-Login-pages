// Simulated user data (replace with actual user authentication)
let user = {
    name: "John Doe",
    role: "writer", // Change this to "employer" to switch roles
    wallet: 1000,
    rating: 4.8
};

// Dashboard statistics
let dashboardStats = {
    activeOrders: 5,
    completedOrders: 28,
    earnings: 5000, // For writers
    totalSpent: 5000, // For employers
    availableOrders: 42 // For writers
};

// Real-time statistics
let realtimeStats = {
    onlineWriters: 15,
    offlineWriters: 27,
    postedOrders: 8,
    pendingOrders: 3
};

// Initialize dashboard
function initDashboard() {
    updateUserInfo();
    updateDashboardSummary();
    populateOrdersTable();
    populateActivityList();
    startRealtimeUpdates();
    adjustDashboardForRole();
}

// Update user information
function updateUserInfo() {
    document.getElementById("user-name").textContent = user.name;
    document.getElementById("user-role").textContent = user.role.charAt(0).toUpperCase() + user.role.slice(1);
    document.getElementById("wallet-amount").textContent = user.wallet.toFixed(2);
    document.getElementById("rating").textContent = user.rating.toFixed(1);
}

// Update dashboard summary
function updateDashboardSummary() {
    document.getElementById("active-orders").textContent = dashboardStats.activeOrders;
    document.getElementById("completed-orders").textContent = dashboardStats.completedOrders;
    if (user.role === "employer") {
        document.getElementById("total-spent").textContent = `$${dashboardStats.totalSpent.toFixed(2)}`;
    } else {
        document.getElementById("earnings").textContent = `$${dashboardStats.earnings.toFixed(2)}`;
        document.getElementById("available-orders").textContent = dashboardStats.availableOrders;
    }
    document.getElementById("rating").textContent = user.rating.toFixed(1);
}

// Populate orders table
function populateOrdersTable() {
    const orders = user.role === "employer" 
        ? [
            { id: "ORD001", title: "Research Paper", writer: "Alice Johnson", deadline: "2024-08-01", status: "In Progress" },
            { id: "ORD002", title: "Essay Writing", writer: "Bob Smith", deadline: "2024-07-25", status: "Pending" },
            { id: "ORD003", title: "Book Review", writer: "Charlie Brown", deadline: "2024-08-10", status: "Completed" },
        ]
        : [
            { id: "ORD001", title: "Research Paper", employer: "ABC Company", deadline: "2024-08-01", status: "In Progress" },
            { id: "ORD002", title: "Essay Writing", employer: "XYZ Corp", deadline: "2024-07-25", status: "Pending" },
            { id: "ORD003", title: "Book Review", employer: "123 Industries", deadline: "2024-08-10", status: "Completed" },
        ];

    const tableBody = document.getElementById("orders-table-body");
    tableBody.innerHTML = '';
    orders.forEach(order => {
        const row = `
            <tr>
                <td>${order.id}</td>
                <td>${order.title}</td>
                <td>${user.role === "employer" ? order.writer : order.employer}</td>
                <td>${order.deadline}</td>
                <td>${order.status}</td>
                <td><button class="view-btn" onclick="viewOrder('${order.id}')">View</button></td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Populate activity list
function populateActivityList() {
    const activities = user.role === "employer"
        ? [
            { icon: "fa-check", text: "Order #1234 completed", time: "2 hours ago" },
            { icon: "fa-plus", text: "New order #5678 posted", time: "5 hours ago" },
            { icon: "fa-star", text: "Received a 5-star rating from writer", time: "1 day ago" },
        ]
        : [
            { icon: "fa-check", text: "Completed order #1234", time: "2 hours ago" },
            { icon: "fa-plus", text: "Accepted new order #5678", time: "5 hours ago" },
            { icon: "fa-star", text: "Received a 5-star rating from employer", time: "1 day ago" },
        ];

    const activityList = document.getElementById("activity-list");
    activityList.innerHTML = '';
    activities.forEach(activity => {
        const li = `
            <li class="activity-item">
                <div class="activity-icon"><i class="fa ${activity.icon}"></i></div>
                <div class="activity-details">
                    <p>${activity.text}</p>
                    <small>${activity.time}</small>
                </div>
            </li>
        `;
        activityList.innerHTML += li;
    });
}

// Update real-time statistics
function updateRealtimeStats() {
    realtimeStats.onlineWriters += Math.floor(Math.random() * 3) - 1;
    realtimeStats.offlineWriters += Math.floor(Math.random() * 3) - 1;
    realtimeStats.postedOrders += Math.floor(Math.random() * 2);
    realtimeStats.pendingOrders += Math.floor(Math.random() * 2) - 1;

    document.getElementById("online-writers").textContent = realtimeStats.onlineWriters;
    document.getElementById("offline-writers").textContent = realtimeStats.offlineWriters;
    document.getElementById("posted-orders").textContent = realtimeStats.postedOrders;
    document.getElementById("pending-orders").textContent = realtimeStats.pendingOrders;

    if (user.role === "writer") {
        dashboardStats.availableOrders += Math.floor(Math.random() * 3) - 1;
        document.getElementById("available-orders").textContent = dashboardStats.availableOrders;
    }
}

// Start real-time updates
function startRealtimeUpdates() {
    setInterval(updateRealtimeStats, 5000); // Update every 5 seconds
}

// Adjust dashboard for user role
function adjustDashboardForRole() {
    const employerElements = document.querySelectorAll('.employer-only');
    const writerElements = document.querySelectorAll('.writer-only');

    if (user.role === "employer") {
        employerElements.forEach(el => el.style.display = 'block');
        writerElements.forEach(el => el.style.display = 'none');
        document.getElementById("order-party-header").textContent = "Writer";
    } else {
        employerElements.forEach(el => el.style.display = 'none');
        writerElements.forEach(el => el.style.display = 'block');
        document.getElementById("order-party-header").textContent = "Employer";
    }
}

// View order details
function viewOrder(orderId) {
    alert(`Viewing details for order ${orderId}`);
    // In a real application, you would show a modal or navigate to an order details page
}

// Initialize dashboard when the page loads
window.onload = initDashboard;