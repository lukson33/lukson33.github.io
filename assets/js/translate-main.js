/* LANGUAGE */
//Define window reload anchors
const dataReload = document.querySelectorAll("[data-reload]");

//Language translations
const language = {
  eng: {
    about: "ABOUT US",
    menu: "MENU",
    gallery: "GALLERY",
    contact: "CONTACT",
    first: "First and only Steampunk restaurant in Serbia.",
    more: "MORE",
    header1: "UNIQUE DECOR",
    header2: "GREEN OASIS",
    header3: "GREAT FUN",
    text1:
      "Cornelius & Cylinder is the first Steampunk restaurant in Serbia, with unique and authentic decor. Check out the magical world of our special ambient and see for yourself.",
    text2:
      "Exceptional hidden garden which isn't bothered by street noise. Peek into the green corner of an exclusive garden in Vračar, spend the day relaxed, with friends or family. Green oasis is ready!",
    text3:
      "Indulge yourself in the charm of our extraordinary ambient and a wide choice of beer, cocktails, and fantastic meals, with live music every Friday and Saturday. Welcome to our world, which has everything...",
    story: "OUR STORY",
    menus: "MENUS",
    restaurant: "RESTAURANT",
    restaurantText:
      "Enjoy in delicious specialties from our kitchen, from a fresh breakfast to start your day strong, to steaks, burgers, pork ribs, wurst, wedges potatoes and much more!",
    caffe: "CAFFE-BAR",
    caffeText:
      "Wide variety of coffee, squeezed juices, cocktails and alcoholic drinks, as well as an adequate choice of wine for every opportunity. For beer lovers, over 40 types of draft and bottled beer!",
    discoverMenu: "DISCOVER OUR MENU",
    discoverCaffeMenu: "DRINKS MENU"
  }
};

//Check if on menu page
if (window.location.href.indexOf("") > -1) {
  //Define language via window hash
  if (window.location.hash) {
    if (window.location.hash === "#eng") {
      document.getElementById("lang-about").textContent = language.eng.about;
      document.getElementById("lang-menu").textContent = language.eng.menu;
      document.getElementById("lang-first").textContent = language.eng.first;
      document.getElementById("lang-discoverMenu").textContent =
        language.eng.discoverMenu;
      document.getElementById("lang-discoverCaffeMenu").textContent =
        language.eng.discoverCaffeMenu;
      document.getElementById("lang-more").textContent = language.eng.more;
      document.getElementById("lang-restaurant").textContent =
        language.eng.restaurant;
      document.getElementById("lang-caffe").textContent = language.eng.caffe;
      document.getElementById("lang-text1").textContent = language.eng.text1;
      document.getElementById("lang-text2").textContent = language.eng.text2;
      document.getElementById("lang-text3").textContent = language.eng.text3;
      document.getElementById("lang-restaurantText").textContent =
        language.eng.restaurantText;
      document.getElementById("lang-caffeText").textContent =
        language.eng.caffeText;
      document.getElementById("lang-story").textContent = language.eng.story;
      document.getElementById("lang-menus").textContent = language.eng.menus;
      document.getElementById("lang-header1").textContent =
        language.eng.header1;
      document.getElementById("lang-header2").textContent =
        language.eng.header2;
      document.getElementById("lang-header3").textContent =
        language.eng.header3;
      document.querySelectorAll(".lang-gallery").forEach(gallery => {
        gallery.textContent = language.eng.gallery;
      });
      document.getElementById("lang-contact").textContent =
        language.eng.contact;
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
