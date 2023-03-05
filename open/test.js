// Sélectionnez les éléments nécessaires
const menuIcon = document.querySelector(".navbar-menu-icon");
const menuLinks = document.querySelector(".navbar-links");
const buttons = document.querySelectorAll(".navbar-buttons button");
const header = document.querySelector('.navbar');

// Ajouter un événement au clic du menu icône
menuIcon.addEventListener("click", () => {
  // Ajouter ou retirer la classe active
  menuLinks.classList.toggle("active");
  // Appliquer la classe active aux boutons
  buttons.forEach(button => button.classList.toggle("active"));
});


document.addEventListener('scroll', () => {
	let scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = ' #2b23aa';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

const link = document.getElementById('show-cards');
let cardsShown = false;
const cards = document.querySelectorAll('.card.hidden');

link.addEventListener('click', (event) => {
  event.preventDefault();
  
  if (!cardsShown) {
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.remove('hidden');
        if (index === cards.length - 1) {
          const target = document.querySelector('#hidden-cards');
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, index * 500);
    });
    cardsShown = true;
    link.textContent = 'Moins -';
  } else {
    cards.forEach((card) => {
      card.classList.add('hidden');
    });
    cardsShown = false;
    link.textContent = 'Plus +';
  }
});

