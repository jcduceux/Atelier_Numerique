// Inscription
signupForm.addEventListener('submit', (e) => {
    // On ne bloque PAS immédiatement l'événement pour laisser le navigateur 
    // détecter l'envoi vers l'action "#registered" définie dans le HTML
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    localStorage.setItem('user', JSON.stringify({ email, password }));

    // On attend un tout petit peu et on force le changement d'URL
    setTimeout(() => {
        window.location.hash = "#registered";
        toggleForms();
    }, 100);
});

// Connexion
loginForm.addEventListener('submit', (e) => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const storedUser = JSON.parse(localStorage.getItem('user'));
    
    if (storedUser && storedUser.email === email && storedUser.password === password) {
        // Redirection vers une ancre pour déclencher le gestionnaire
        window.location.hash = "#dashboard";
        showDashboard(email);
    } else {
        e.preventDefault();
        alert("Erreur : Identifiants incorrects.");
    }
});
