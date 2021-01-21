// NAVBAR
const collapsedNavItems = document.querySelector(".navbar-items");
const openNavbar = () => {
  collapsedNavItems.style.top = 0;
};
const closeNavbar = () => {
  collapsedNavItems.style.top = "-200%";
};

// ANIMATION INITIALIZATION
window.onload = () => {
  new WOW().init();
};
