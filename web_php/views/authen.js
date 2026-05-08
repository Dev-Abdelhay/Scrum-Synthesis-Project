// 1. SHOW / HIDE PASSWORD
var passInput = document.getElementById('password');
var toggleBtn = document.getElementById('togglePass');

// We use a regular function here - it's easier to read!
toggleBtn.onclick = function() {
    // If the input is currently a password, change it to text
    if (passInput.type === 'password') {
        passInput.type = 'text';
        toggleBtn.textContent = "Masquer"; // Simple text instead of complex icons
    } 
    // Otherwise, change it back to password
    else {
        passInput.type = 'password';
        toggleBtn.textContent = "Afficher";
    }
};

// 2. FILL DEMO ACCOUNT
function fillDemo(email) {
    document.getElementById('email').value = email;
    document.getElementById('password').value = 'demo1234';
    
    // Hide the error message if it was showing
    var err = document.getElementById('errorMsg');
    err.classList.remove('show');
}

// 3. LOGIN HANDLER (When clicking the button)
var loginBtn = document.getElementById('loginBtn');

loginBtn.onclick = function() {
    var email = document.getElementById('email').value;
    var pass  = document.getElementById('password').value;
    var err   = document.getElementById('errorMsg');

    // Check if fields are empty
    if (email === "" || pass === "") {
        err.textContent = 'Veuillez remplir tous les champs.';
        err.classList.add('show');
    } 
    // If fields are filled, let them in!
    else {
        // Change button text to show success
        loginBtn.innerHTML = "Connecté !";
        loginBtn.style.backgroundColor = "#0bc5b0";
        
        // Wait a little bit (0.9 seconds) then go to the dashboard
        setTimeout(function() {
            window.location.href = 'scrum-board.html';
        }, 900);
    }
};

// 4. PRESS ENTER TO LOGIN
document.onkeydown = function(event) {
    if (event.key === 'Enter') {
        loginBtn.click();
    }
};