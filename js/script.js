const btnMenu = document.getElementsByClassName('hamburger')[0];
const mobileMenu = document.getElementsByClassName('mobile-menu')[0];
const liMenu = document.querySelectorAll('.mobile_links');


const clickedBtn = function() {
    mobileMenu.classList.toggle('active');
}

// Event Listnener
btnMenu.addEventListener('click', clickedBtn);
