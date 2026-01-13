function showSection(mode) {
    document.getElementById('login-section').classList.toggle('hidden', mode !== 'login');
    document.getElementById('register-section').classList.toggle('hidden', mode !== 'register');
    document.getElementById('user-section').classList.add('hidden');
}

function togglePasswordVisibility(inputId) {
    const input = document.getElementById(inputId);
    input.type = input.type === "password" ? "text" : "password";
}

function handleAuth(mode) {
    const user = mode === 'login' ? document.getElementById('login-user').value.trim() : document.getElementById('reg-user').value.trim();
    const pass = mode === 'login' ? document.getElementById('login-pass').value : document.getElementById('reg-pass').value;

    if (!user || !pass) return alert("Remplissez les champs !");

    if (mode === 'login') {
        const storedPass = localStorage.getItem(user);
        if (storedPass === pass) {
            showDashboard(user);
        } else {
            alert("Identifiants incorrects.");
        }
    } else {
        if (localStorage.getItem(user)) return alert("Cet utilisateur existe déjà.");
        localStorage.setItem(user, pass);
        alert("Compte créé avec succès !");
        
        // IMPORTANT pour Bitwarden : On recharge pour simuler une fin de processus
        setTimeout(() => { location.reload(); }, 500);
    }
}

function showDashboard(user) {
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('register-section').classList.add('hidden');
    document.getElementById('user-section').classList.remove('hidden');
    document.getElementById('display-user').innerText = user;
}

function logout() { location.reload(); }

function deleteAccount() {
    const user = document.getElementById('display-user').innerText;
    if (confirm("Supprimer définitivement ce compte ?")) {
        localStorage.removeItem(user);
        logout();
    }
}
