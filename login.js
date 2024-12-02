document.addEventListener('DOMContentLoaded', function() {
    const loginNavBtn = document.getElementById('loginNavBtn');
    const signupNavBtn = document.getElementById('signupNavBtn');
    const authModal = document.getElementById('authModal');
    const closeBtn = document.querySelector('.close');
    const showSignupForm = document.getElementById('showSignupForm');
    const showLoginForm = document.getElementById('showLoginForm');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    function showPage(pageId) {
        document.querySelectorAll('.page-content').forEach(page => page.style.display = 'none');
        document.getElementById(pageId).style.display = 'block';
    }

    document.querySelector('nav ul').addEventListener('click', function(e) {
        if (e.target.tagName === 'A' && e.target.getAttribute('data-page')) {
            e.preventDefault();
            showPage(e.target.getAttribute('data-page'));
        }
    });

    function toggleAuthModal(show = true) {
        authModal.style.display = show ? 'block' : 'none';
    }

    function toggleForms(showLogin = true) {
        loginForm.style.display = showLogin ? 'block' : 'none';
        registerForm.style.display = showLogin ? 'none' : 'block';
    }

    loginNavBtn.onclick = function() {
        toggleAuthModal();
        toggleForms(true);
    }

    signupNavBtn.onclick = function() {
        toggleAuthModal();
        toggleForms(false);
    }

    closeBtn.onclick = function() {
        toggleAuthModal(false);
    }

    showSignupForm.onclick = function(e) {
        e.preventDefault();
        toggleForms(false);
    }

    showLoginForm.onclick = function(e) {
        e.preventDefault();
        toggleForms(true);
    }

    window.onclick = function(event) {
        if (event.target == authModal) {
            toggleAuthModal(false);
        }
    }

    loginForm.onsubmit = function(e) {
        e.preventDefault();
        // Add login logic here
        console.log('Login submitted');
    }

    registerForm.onsubmit = function(e) {
        e.preventDefault();
        // Add registration logic here
        console.log('Registration submitted');
    }
});