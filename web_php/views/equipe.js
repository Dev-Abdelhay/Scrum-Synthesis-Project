// 1. Wait for the whole page to load
window.onload = function() {

    // --- SECTION 1: SIDEBAR NAVIGATION ---
    var menuLinks = document.querySelectorAll('.menu a');

    for (var i = 0; i < menuLinks.length; i++) {
        menuLinks[i].onclick = function() {
            // Remove 'active' from all links
            for (var j = 0; j < menuLinks.length; j++) {
                menuLinks[j].classList.remove('active');
            }
            // Add 'active' to the clicked one
            this.classList.add('active');
        };
    }

    // --- SECTION 2: SEARCH FILTER (TEAM MEMBERS) ---
    var searchInput = document.querySelector('.search-box input');
    var memberCards = document.querySelectorAll('.member-card');

    // 'oninput' runs every time you type a letter
    searchInput.oninput = function() {
        var query = searchInput.value.toLowerCase();

        for (var k = 0; k < memberCards.length; k++) {
            // Get the name and role inside each card
            var name = memberCards[k].querySelector('h4').textContent.toLowerCase();
            var role = memberCards[k].querySelector('.role').textContent.toLowerCase();

            // Check if the name OR the role contains what we typed
            if (name.indexOf(query) !== -1 || role.indexOf(query) !== -1) {
                memberCards[k].style.display = 'flex'; // Show it
            } else {
                memberCards[k].style.display = 'none'; // Hide it
            }
        }
    };

    // --- SECTION 3: THREE DOTS MENU ---
    var actionIcons = document.querySelectorAll('.menu-dots');

    for (var m = 0; m < actionIcons.length; m++) {
        actionIcons[m].onclick = function() {
            // Find the closest card to get the person's name
            var card = this.closest('.member-card');
            var personName = card.querySelector('h4').textContent;
            
            alert("Gérer les accès pour : " + personName);
        };
    }

    // --- SECTION 4: INVITE BUTTON ---
    var inviteBtn = document.querySelector('.btn-black');
    
    inviteBtn.onclick = function() {
        alert("Action : Envoyer une invitation par email");
    };
};