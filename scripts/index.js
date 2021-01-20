// NAVBAR
const collapsedNavItems = document.querySelector(".navbar-items");
const openNavbar = () => {
  collapsedNavItems.style.top = 0;
};
const closeNavbar = () => {
  collapsedNavItems.style.top = "-200%";
};

//IMAGE ANIMATION USING GSAP

const t1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".header",
    start: "top",
  },
});

t1.from("#watch-img", { delay: 0.5, x: 300, opacity: 0 });

const t2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#watch-img",
    start: "top",
  },
});

t2.from("#learn-img", { delay: 0.5, x: -300, opacity: 0 });

const t3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#learn-img",
    start: "top",
  },
});

t3.from("#explore-img", { delay: 0.5, x: 300, opacity: 0 });
