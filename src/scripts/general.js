// Any javascript will go here

var headerNav;
var state = {};

window.addEventListener('load', function () {

  // Make hamburger toggle open menu
  let menuIcon = document.getElementById('hamburger-icon-body');
  menuIcon.addEventListener('click', toggleMenuDrawer, false);

  let headerIcon = document.getElementById('header-icon');  
});




// -------------------------------------------------------------------------------------------------------
// Hamburger Menu
// -------------------------------------------------------------------------------------------------------

function toggleMenuDrawer() {
  let body = document.getElementById('body');
  let menu = document.getElementById('mobile-menu-drawer');
  let icon = document.getElementById('hamburger-icon-body');
  if (body && icon) {
    toggleClass(body, 'scroll-lock');
    toggleClass(menu, 'mobile-drawer--open');
    toggleClass(icon, 'hamburger-icon--open');
  }
}

function closeMenuDrawer() {
  let menu = document.getElementById('mobile-drawer-drawer');
  if (menu) {
    removeClass(menu, 'mobile-drawer--open');
  }
}

function openMenuDrawer() {
  let menu = document.getElementById('mobile-drawer-drawer');
  if (menu) {
    addClass(menu, 'mobile-drawer--open');
  }
}

