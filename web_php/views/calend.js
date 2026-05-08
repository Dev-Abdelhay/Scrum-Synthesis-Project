// 1. Wait for the page to finish loading
window.onload = function() {

    // --- SECTION 1: MENU HIGHLIGHTING ---
    // Get all the links in the sidebar menu
    var menuLinks = document.querySelectorAll('.menu a');

    // Loop through each link to add a click action
    for (var i = 0; i < menuLinks.length; i++) {
        
        menuLinks[i].onclick = function() {
            
            // Step A: Remove the 'active' class from all links first
            for (var j = 0; j < menuLinks.length; j++) {
                menuLinks[j].classList.remove('active');
            }

            // Step B: Add the 'active' class to the one we just clicked
            this.classList.add('active');
        };
    }

    // --- SECTION 2: SEARCH BAR ---
    var searchInput = document.querySelector('.search-box input');

    // We listen for a key being pressed inside the search box
    searchInput.onkeypress = function(event) {
        // We check if the key pressed was the "Enter" key
        if (event.key === 'Enter') {
            // Show the search text in the console (F12 in browser)
            console.log("Recherche pour : " + searchInput.value);
        }
    };

    // --- SECTION 3: CALENDAR CLICK ---
    var calendarBox = document.querySelector('.calendar-container');

    // Change the mouse cursor to a pointer (hand) to show it's clickable
    calendarBox.style.cursor = 'pointer';

    calendarBox.onclick = function() {
        console.log("Initialisation du module...");
        alert("Chargement du calendrier en cours...");
    };

};