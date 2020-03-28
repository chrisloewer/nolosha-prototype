// Any javascript will go here

var headerNav;

window.addEventListener('load', function () {

  // Make hamburger toggle open menu
  let menuIcon = document.getElementById('hamburger-icon-body');
  menuIcon.addEventListener('click', toggleMenuPopup, false);

  let headerIcon = document.getElementById('header-icon');  
});




// -------------------------------------------------------------------------------------------------------
// Hamburger Menu
// -------------------------------------------------------------------------------------------------------

function toggleMenuPopup() {
  let body = document.getElementById('body');
  // let menu = document.getElementById('menu-popup');
  let icon = document.getElementById('hamburger-icon-body');
  if (body && icon) {
    toggleClass(body, 'scroll-lock');
    // toggleClass(menu, 'open');
    toggleClass(icon, 'open');
  }
}

function closeMenuPopup() {
  let menu = document.getElementById('menu-popup');
  if (menu) {
    removeClass(menu, 'open');
  }
}

function openMenuPopup() {
  let menu = document.getElementById('menu-popup');
  if (menu) {
    addClass(menu, 'open');
  }
}

