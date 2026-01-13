const signupSection = document.getElementById('signup-section');
const loginSection = document.getElementById('login-section');
const dashboard = document.getElementById('dashboard-section');
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');

function toggleForms() {
    signupSection.style.display = (signupSection.style.display === 'none') ? 'block' : 'none';
    loginSection.style.display = (loginSection.style.display === 'none') ? 'block' : 'none';
}

// Inscription
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    
    localStorage.setItem('user', JSON.stringify({ email, password }));
    
    // On simule un court délai pour laisser le gestionnaire analyser le formulaire
    setTimeout(() => {
        toggleForms();
        console.log("Compte créé localement");
    }, 500);
});

// Connexion
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const storedUser = JSON.parse(localStorage.getItem('user'));
    
    if (storedUser && storedUser.email === email && storedUser.password === password) {
        setTimeout(() => {
            showDashboard(email);
        }, 500);
    } else {
        alert("Erreur : Identifiants incorrects.");
    }
});

function showDashboard(email) {
    signupSection.style.display = 'none';
    loginSection.style.display = 'none';
    dashboard.style.display = 'block';
    document.getElementById('user-display').innerText = email;
}

function logout() { window.location.href = window.location.pathname; }

function deleteAccount() {
    if(confirm("Supprimer le compte ?")) {
        localStorage.removeItem('user');
        logout();
    }
}
