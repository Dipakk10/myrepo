// Get all cards and overlay
const cards = document.querySelectorAll('.card');
const overlay = document.getElementById('overlay');
let activeCard = null;

// Add click event to each card
cards.forEach(card => {
     card.addEventListener('click', function () {
          // If this card is already active, deactivate it
          if (this.classList.contains('active')) {
               this.classList.remove('active');
               overlay.classList.remove('active');
               activeCard = null;
          } else {
               // Deactivate any currently active card
               if (activeCard) {
                    activeCard.classList.remove('active');
               }

               // Activate this card
               this.classList.add('active');
               overlay.classList.add('active');
               activeCard = this;
          }
     });
});

// Close active card when clicking on overlay
overlay.addEventListener('click', function () {
     if (activeCard) {
          activeCard.classList.remove('active');
          this.classList.remove('active');
          activeCard = null;
     }
});