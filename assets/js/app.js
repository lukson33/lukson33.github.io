const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  //Toggle nav
  burger.addEventListener("click", () => {
    //Toggle nav
    nav.classList.toggle("nav-active");

    //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        const delay = (link.style.animation = `navLinkFade 0.5s ease forwards ${index /
          11 +
          0.5}s`);
        console.log(delay);
      }
    });
    //Burger Animation
    burger.classList.toggle("toggle");
  });
};

//Scroll nav

document.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    const logo = document.querySelector(".logo");
    const navBurger = document.querySelector(".burger");
    const nav = document.querySelector("nav");
    logo.classList.add("logo-scroll");
    navBurger.classList.add("nav-scroll");
  }
});

navSlide();

//JQUERY SLIDE
$(".click-info").click(function() {
  $("html,body").animate(
    {
      scrollTop: $("#info").offset().top
    },
    "slow"
  );
});

$(".click-boxes").click(function() {
  $("html,body").animate(
    {
      scrollTop: $("#boxes").offset().top
    },
    "slow"
  );
});

/* document.addEventListener("DOMContentLoaded", () => {
  console.log("works");
  anime
    .timeline({
      easing: "easeOutExpo"
    })
    .add({
      targets: "nav, .nav-a",
      translateY: [40, 0],
      opacity: [0, 1],
      duration: "1000",
      delay: (el, i) => 100 * i
    })
    .add({
      targets: ".header-h1",
      opacity: [0, 1],
      translateY: [40, 0],
      duration: "1400",
      offset: "-=900"
    })
    .add({
      targets: ".header-p",
      opacity: [0, 1],
      translateY: [40, 0],
      duration: "1400",
      offset: "-=900"
    })
    .add({
      targets: ".header-btn",
      opacity: [0, 1],
      translateY: [30, 0],
      offset: "-=900"
    });
});
 */
