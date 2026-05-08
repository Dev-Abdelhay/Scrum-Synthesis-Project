// 1. Wait for the page to be ready
window.onload = function() {

    // --- SECTION 1: SIDEBAR NAVIGATION ---
    var menuItems = document.querySelectorAll('.menu a');

    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].onclick = function() {
            // First, remove 'active' from all menu links
            for (var j = 0; j < menuItems.length; j++) {
                menuItems[j].classList.remove('active');
            }
            // Then, add it to the one we just clicked
            this.classList.add('active');
        };
    }

    // --- SECTION 2: LIVE SEARCH FILTER ---
    var searchInput = document.querySelector('.search-box input');
    var tableRows = document.querySelectorAll('.tasks-table tbody tr');

    // This runs every time you type a letter
    searchInput.oninput = function() {
        var term = searchInput.value.toLowerCase();

        for (var k = 0; k < tableRows.length; k++) {
            // Find the task title and project subtitle in the current row
            var taskTitle = tableRows[k].querySelector('.task-title').textContent.toLowerCase();
            var projectSub = tableRows[k].querySelector('.task-sub').textContent.toLowerCase();

            // If the search term is found in either, show the row. Otherwise, hide it.
            if (taskTitle.indexOf(term) !== -1 || projectSub.indexOf(term) !== -1) {
                tableRows[k].style.display = ""; // Show
            } else {
                tableRows[k].style.display = "none"; // Hide
            }
        }
    };

    // --- SECTION 3: TABLE ACTIONS (THE THREE DOTS) ---
    var actionIcons = document.querySelectorAll('.menu-icon');

    for (var m = 0; m < actionIcons.length; m++) {
        actionIcons[m].onclick = function(event) {
            // This stops the click from affecting other elements
            event.stopPropagation();
            
            // Go to the parent row (tr) and find the name of the task
            var row = this.closest('tr');
            var taskName = row.querySelector('.task-title').innerText;
            
            alert("Options pour la tâche : " + taskName);
        };
    }

    // --- SECTION 4: BUTTONS AND NOTIFICATIONS ---
    var newTaskBtn = document.querySelector('.btn-black');
    var bellIcon = document.querySelector('.notification-dot');

    // New Task Button
    if (newTaskBtn) {
        newTaskBtn.onclick = function() {
            alert("Action : Ouvrir le formulaire de création de tâche");
        };
    }

    // Notification Bell
    if (bellIcon) {
        bellIcon.onclick = function() {
            alert("Vous avez des mises à jour sur 2 tâches.");
        };
    }
};