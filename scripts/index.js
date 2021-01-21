// NAVBAR
const collapsedNavItems = document.querySelector(".navbar-items");
const openNavbar = () => {
  collapsedNavItems.style.top = 0;
};
const closeNavbar = () => {
  collapsedNavItems.style.top = "-200%";
};

// GSAP
if (window.screen.width <= 768) {
  const t1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#triggerAnimation",
      start: "top",
    },
  });
  t1.from("#watch-img", { opacity: 0, x: 300, delay: 0 }, "-=1");

  const t2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".watch-section",
      start: "bottom",
    },
  });
  t2.from("#learn-img", { opacity: 0, x: -300, delay: 0 }, "-=1");

  const t3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".learn-section",
      start: "bottom",
    },
  });
  t3.from("#explore-img", { opacity: 0, x: 300, delay: 0 }, "-=1");
} else {
  const t1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".webAnimator",
      start: "center",
    },
  });
  t1.from("#watch-img", { delay: 0, x: 300, opacity: 0 }, "-=0.7");

  const t2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".watch-section",
      start: "top",
    },
  });
  t2.from("#learn-img", { delay: 0, x: -300, opacity: 0 }, "-=0.7");

  const t3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".learn-section",
      start: "top",
    },
  });
  t3.from("#explore-img", { delay: 0, x: 300, opacity: 0 }, "-=0.7");
}
