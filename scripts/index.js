// NAVBAR
const collapsedNavItems = document.querySelector(".navbar-items");
const openNavbar = () => {
  collapsedNavItems.style.top = 0;
};
const closeNavbar = () => {
  collapsedNavItems.style.top = "-200%";
};

// GSAP
const t1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".watch",
    start: "center",
  },
});
t1.from(
  "#watch-img",
  { opacity: 0, x: 300 },
);

const t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".watch-section",
    start: "center",
  },
});
t2.from(
  "#learn-img",
  { opacity: 0, x: -300 },
);

const t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".learn-section",
    start: "center",
  },
});
t3.from(
  "#explore-img",
  { opacity: 0, x: 300 },
);
