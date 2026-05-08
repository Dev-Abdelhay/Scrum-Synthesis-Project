// 1. Wait for the page to load
window.onload = function() {

    // --- SECTION 1: PREPARING THE CARDS ---
    var cards = document.querySelectorAll('.task-card');

    for (var i = 0; i < cards.length; i++) {
        // We tell the browser these cards are allowed to be dragged
        cards[i].draggable = true;

        // When we start dragging a card
        cards[i].ondragstart = function() {
            // We give it a special class so we know which one is moving
            this.classList.add('dragging');
        };

        // When we let go of the card
        cards[i].ondragend = function() {
            // Remove that special class
            this.classList.remove('dragging');
        };
    }

    // --- SECTION 2: HANDLING THE COLUMNS ---
    var columns = document.querySelectorAll('.task-list');

    for (var j = 0; j < columns.length; j++) {
        
        // When a card is being hovered over a column
        columns[j].ondragover = function(event) {
            // Crucial: This allows us to "drop" the item
            event.preventDefault(); 
        };

        // When we actually drop the card into the column
        columns[j].ondrop = function() {
            // Find the card that has the 'dragging' class
            var draggingCard = document.querySelector('.dragging');
            
            // Move that card into this column
            if (draggingCard) {
                this.appendChild(draggingCard);
            }
        };
    }

    // --- SECTION 3: BUTTON CLICK ---
    var addBtn = document.querySelector('.btn-primary');
    
    if (addBtn) {
        addBtn.onclick = function() {
            alert("Ajouter une nouvelle tâche au sprint...");
        };
    }
};