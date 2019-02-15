// const navSlide = () => {
//   const burger = document.querySelector(".burger");
//   const nav = document.querySelector(".nav-links");
//   const navLinks = document.querySelectorAll(".nav-links li");

//   //Toggle nav
//   burger.addEventListener("click", () => {
//     //Toggle nav
//     nav.classList.toggle("nav-active");

//     //Animate links
//     navLinks.forEach((link, index) => {
//       if (link.style.animation) {
//         link.style.animation = "";
//       } else {
//         const delay = (link.style.animation = `navLinkFade 0.5s ease forwards ${index /
//           11 +
//           0.5}s`);
//         console.log(delay);
//       }
//     });
//     //Burger Animation
//     burger.classList.toggle("toggle");
//   });
// };

// if (nav.classList[1] === "nav-active") {
//   console.log("active");
// } else {
//   console.log("not-active");
// }

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  let isOpen = false;

  //Toggle nav
  burger.addEventListener("click", () => {
    //Toggle nav
    nav.classList.toggle("nav-active");
    if (isOpen) {
      isOpen = false;
    } else {
      isOpen = true;
    }

    if (isOpen) {
      //Animate links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          const delay = (link.style.animation = `navLinkFade 0.5s ease forwards ${index /
            11 +
            0.5}s`);
        }
      });
    } else if (!isOpen) {
      navLinks.forEach(link => {
        link.style.animation = "";
      });
    }

    navLinks.forEach(link => {
      link.addEventListener("click", function() {
        nav.classList.remove("nav-active");
        isOpen = false;
        burger.classList.remove("toggle");
        navLinks.forEach(link => {
          link.style.animation = "";
        });
      });
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

const navLinks = document.querySelectorAll(".nav-links li");
const nav = document.querySelector(".nav-links");

navLinks.forEach(link => {
  link.addEventListener("click", function() {
    nav.classList.remove("nav-active");
  });
});

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

/* REMOVE HOVER ON MOBILE */
function hasTouch() {
  return (
    "ontouchstart" in document.documentElement ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

if (hasTouch()) {
  // remove all :hover stylesheets
  try {
    // prevent exception on browsers not supporting DOM styleSheets properly
    for (var si in document.styleSheets) {
      var styleSheet = document.styleSheets[si];
      if (!styleSheet.rules) continue;

      for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
        if (!styleSheet.rules[ri].selectorText) continue;

        if (styleSheet.rules[ri].selectorText.match(":hover")) {
          styleSheet.deleteRule(ri);
        }
      }
    }
  } catch (ex) {}
}
