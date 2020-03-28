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
  let menu = document.getElementById('mobile-menu-drawer');
  let icon = document.getElementById('hamburger-icon-body');
  if (body && icon) {
    toggleClass(body, 'scroll-lock');
    toggleClass(menu, 'mobile-menu--open');
    toggleClass(icon, 'hamburger-icon--open');
  }
}

function closeMenuPopup() {
  let menu = document.getElementById('mobile-menu-drawer');
  if (menu) {
    removeClass(menu, 'mobile-menu--open');
  }
}

function openMenuPopup() {
  let menu = document.getElementById('mobile-menu-drawer');
  if (menu) {
    addClass(menu, 'mobile-menu--open');
  }
}

