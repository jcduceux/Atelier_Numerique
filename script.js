const signupSection = document.getElementById('signup-section');
const loginSection = document.getElementById('login-section');
const dashboard = document.getElementById('dashboard-section');
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');

// Fonction pour basculer entre Inscription et Connexion
function toggleForms() {
    if (signupSection.style.display === 'none') {
        signupSection.style.display = 'block';
        loginSection.style.display = 'none';
    } else {
        signupSection.style.display = 'none';
        loginSection.style.display = 'block';
    }
}

// Inscription
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    
    // Sauvegarde locale (simule une base de données)
    localStorage.setItem('user', JSON.stringify({ email, password }));
    
    alert("Compte créé avec succès ! Votre gestionnaire de mots de passe devrait vous proposer de l'enregistrer.");
    toggleForms();
});

// Connexion
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    const storedUser = JSON.parse(localStorage.getItem('user'));
    
    if (storedUser && storedUser.email === email && storedUser.password === password) {
        showDashboard(email);
    } else {
        alert("Erreur : Identifiants inconnus ou incorrects.");
    }
});

function showDashboard(email) {
    signupSection.style.display = 'none';
    loginSection.style.display = 'none';
    dashboard.style.display = 'block';
    document.getElementById('user-display').innerText = email;
}

function logout() {
    // On recharge simplement la page pour la démo
    window.location.reload();
}

function deleteAccount() {
    if(confirm("Êtes-vous sûr de vouloir supprimer ce compte de la base de données ?")) {
        localStorage.removeItem('user');
        alert("Compte supprimé de la base de données locale.");
        window.location.reload();
    }
}
