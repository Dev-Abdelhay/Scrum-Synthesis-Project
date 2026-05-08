// 1. Wait for the page to be ready
window.onload = function() {

    // 2. NAVIGATION: Switching the "active" highlight
    // We get all the links in the menu
    var menuItems = document.querySelectorAll('.menu a');

    // We loop through each link one by one
    for (var i = 0; i < menuItems.length; i++) {
        
        menuItems[i].onclick = function() {
            
            // Step A: First, remove 'active' from EVERY link 
            // (This clears the previous highlight)
            for (var j = 0; j < menuItems.length; j++) {
                menuItems[j].classList.remove('active');
            }

            // Step B: Then, add 'active' only to the one we just clicked
            this.classList.add('active');
        };
    }

    // 3. ADD BUTTON: Show an alert
    var addButton = document.querySelector('.btn-primary');

    addButton.onclick = function() {
        alert("Action: Ouvrir le formulaire de création d'une User Story");
    };
};