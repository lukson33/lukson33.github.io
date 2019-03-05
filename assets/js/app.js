/* REMOVE HOVER ON PHONES */
if (screen.width < 800) {
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
}

/* NAVIGATION ANIMATION */
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
            14 +
            0.4}s`);
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

/* LANGUAGE */
//Define window reload anchors
const dataReload = document.querySelectorAll("[data-reload]");

//Language translations
const language = {
  eng: {
    more: "SEE MORE",
    text1: "ENG-TEXT",
    about: "ABOUT US",
    menu: "MENU",
    gallery: "GALLERY",
    contact: "CONTACT",
    main: "MAIN PAGE",
    mainDishes: "MAIN DISHES"
  }
};

//Check if on main page
if (window.location.href.indexOf("index") > -1) {
  //Define language via window hash
  if (window.location.hash) {
    if (window.location.hash === "#eng") {
      document.getElementById("lang-more").textContent = language.eng.more;
      document.getElementById("lang-text1").textContent = language.eng.text1;
      document.getElementById("lang-about").textContent = language.eng.about;
      document.getElementById("lang-menu").textContent = language.eng.menu;
      document.getElementById("lang-gallery").textContent =
        language.eng.gallery;
      document.getElementById("lang-contact").textContent =
        language.eng.contact;
    }
  }
}

//Check if on menu page
if (window.location.href.indexOf("menu") > -1) {
  //Define language via window hash
  if (window.location.hash) {
    if (window.location.hash === "#eng") {
      document.getElementById("lang-main").textContent = language.eng.main;
      document.getElementById("lang-about").textContent = language.eng.about;
      document.getElementById("lang-gallery").textContent =
        language.eng.gallery;
      document.getElementById("lang-contact").textContent =
        language.eng.contact;
      document.querySelectorAll(".mainDishes").forEach(dish => {
        dish.textContent = language.eng.mainDishes;
      });
    }
  }
}

// Reload the page on button
dataReload.forEach(data => {
  data.addEventListener("click", () => {
    setTimeout(function() {
      location.reload(true);
    }, 500);
  });
});
