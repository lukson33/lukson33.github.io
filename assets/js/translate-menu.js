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
    breakfast: "BREAKFAST",
    mainDishes: "MAIN DISHES",
    soup: "SOUP",
    salads: "SALADS",
    salad: "SALADS",
    mealSalads: "MEAL SALADS",
    between: "SOMETHING IN BETWEEN",
    notReally: "NOT REALLY MAIN DISHES",
    restaurant: "RESTAURANT",
    caffeBar: "CAFFE-BAR",
    special: "SOMETHING REALLY SPECIAL (FOR 2 PEOPLE)",
    special: "SOMETHING REALLY SPECIAL (FOR 2 PEOPLE)",
    steaks: "STEAKS",
    sandwich: "SANDWICHES",
    side: "SIDE DISHES",
    desert: "DESSERTS",
    cakes: "CAKES",
    name1: "BEEF CHEESEBURGER",
    name4: "BEEFSTEAK ON GRILL (300g)",
    name5: "BUFFALO WINGS (500g)",
    name6: "MARINATED PORK RIBS (700g)",
    name7: "TANDOORI CHICKEN",
    name8: "PREMIUM WURST",
    name9: "WURST WITH CHEESE",
    name10: "HOT WURST",
    name16: "POTTAGE OF THE DAY",
    name17: "CHICKEN SOUP",
    name18: "VEAL SOUP",
    name19: "CAESAR SALAD",
    name20: "GREEK SALAD",
    name22: "BEETROOT SALAD",
    name23: "QUINOA SALAD WITH PUMPKIN",
    name25: "SEASON SALAD",
    name26: "SERBIAN SALAD",
    name30: "MOZARELLA STICKS",
    name31: "BRUSCHETTA WITH TOMATOES",
    name32: "CHICKEN TORTILLA",
    name34: "PHILLY CHEESESTEAK SANDWICH",
    name35: "CLUB SANDWICH",
    name36: "GRILLED VEGETABLES",
    name37: "FRENCH FRIES (200g)",
    name38: "POTATO WEDGES",
    name39: "HAM (50g)",
    name40: "PROSCIUTTO (100g)",
    name41: "GUACAMOLE SALSA",
    name42: "BLUE CHEESE DRESSING",
    name43: "MARINARA SAUCE",
    name44: "STUFFED POTATO",
    name45: "FETA CHEESE (100g)",
    name46: "PANCETTA (30g)",
    name48: "FOREST BERRY SAUCE",
    name49: "GREEN PEPPER SAUCE",
    name50: "FOUR CHEESE SAUCE",
    name51: "BREAD (200g)",
    name53: "AMERICAN PANCAKES",
    name54: "CAPRI CAKE",
    name55: "CHOCOLATE RASPBERRY CAKE",
    name56: "ORANGE JAFFA CAKE",
    name57: "DUET HAZELNUT CAKE",
    name58: "FRIED EGGS WITH BACON",
    name59: "HAM OMELETTE",
    name60: "VEGETABLES OMELETTE",
    name61: "FRENCH TOAST WITH KAJMAK AND AJVAR",
    desc1:
      "beef meat, cheddar cheese, caramelized onions, pickles, iceberg salad, tomato, bacon /fries, onion rings/",
    desc2:
      "angus beef meat, emmentaler cheese, red onion, mushrooms, iceberg salad, tomato /fries, onions rings",
    desc3:
      "chopped slowly baked pork meat in BBQ sauce, coleslaw salad /fries/",
    desc4:
      "angus beef meat, emmentaler cheese, red onion, mushrooms, iceberg salad, tomato /fries, onions rings",
    desc5:
      "chicken wings in spicy buffalo sauce, garlic bread, blue cheese sauce",
    desc6:
      "slowly baked, glazed pork ribs, sweet corn, coleslaw salad, potato wedges, BBQ sauce",
    desc7: "dry marinated chicken breasts, curry rice with vegetables",
    desc8: "beef and pork meat, seasoned potato wedges, mustard",
    desc9: "seasoned potato wedges, mustard",
    desc10: "seasoned potato wedges, mustard",
    desc11:
      "njeguski prsut, bruschetta with tomato, brie cheese, dry plums rolled in pancetta with jalapeño peppers, parmesan, marinated goat cheese, olives",
    desc12:
      "buffalo wings, pork ribs, wurst, potato wedges, onion rings, BBQ sauce, blue cheese sauce",
    desc13:
      "chicken tortillas, chilli meat tortillas, empanadas, mozarella sticks, fried olives, coleslaw salad, onion rings",
    desc14: "stuffed potato, sauce by choice",
    desc15: "stuffed potato, sauce by choice",
    desc16: "croutons, parmesan",
    desc18: "veal, sour cream",
    desc19: "chicken, iceberg salad, dressing, pancetta, parmesan",
    desc20: "tomato, paprika, cucumber, feta cheese, olives",
    desc21: "mix of green salads, cucumber, avocado, parmesan, dressing",
    desc22: "beetroot, rocket, marinated cheese, field pumpkin, dressing",
    desc23: "quinoa, baked pumpkin, baby spinach, black sesame, dressing",
    desc24:
      "iceberg salad, rocket, angus beef, smoked chicken, pancetta, parmesan, ranch sauce",
    desc30: "mozarella sticks with marinara sauce",
    desc31: "tomato, olive oil, fresh basil",
    desc32: "chicken, guacamole sauce, tomato, iceberg, sour cream, paprika",
    desc33:
      "tortilla chips with 3 sauces, salsa, cheddar, tomato sauce, guacamole",
    desc34: "angus beef meat, melted american cheese, onions, paprika",
    desc35: "chicken, egg, pancetta, fries",
    desc52: "apples, vanilla ice cream",
    desc53: "with maple syrup, butter, fruit berry sauce and vanilla ice cream",
    desc54: "cinnamon, brown sugar, butter",
    desc55: "crispy bacon, feta cheese and tomatoes (3 eggs)",
    desc56: "feta cheese and tomatoes (3 eggs)",
    desc57: "pepper, zucchini, mushrooms, tomatoes, onions",
    desc58: "ham, mozzarela"
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
      document.querySelectorAll(".soup").forEach(soup => {
        soup.textContent = language.eng.soup;
      });
      document.querySelectorAll(".desert").forEach(desert => {
        desert.textContent = language.eng.desert;
      });
      document.querySelectorAll(".breakfast").forEach(breakfast => {
        breakfast.textContent = language.eng.breakfast;
      });
      document.getElementById("restaurant").textContent =
        language.eng.restaurant;
      document.getElementById("caffeBar").textContent = language.eng.caffeBar;
      document.getElementById("special").textContent = language.eng.special;
      document.getElementById("salads").textContent = language.eng.salads;
      document.getElementById("mealSalads").textContent =
        language.eng.mealSalads;
      document.getElementById("notReally").textContent = language.eng.notReally;
      document.getElementById("between").textContent = language.eng.between;
      document.getElementById("steaks").textContent = language.eng.steaks;
      document.getElementById("sandwich").textContent = language.eng.sandwich;
      document.getElementById("salad").textContent = language.eng.salad;
      document.getElementById("side").textContent = language.eng.side;
      document.getElementById("cakes").textContent = language.eng.cakes;
      document.getElementById("name1").textContent = language.eng.name1;
      document.getElementById("name4").textContent = language.eng.name4;
      document.getElementById("name5").textContent = language.eng.name5;
      document.getElementById("name6").textContent = language.eng.name6;
      document.getElementById("name7").textContent = language.eng.name7;
      document.getElementById("name8").textContent = language.eng.name8;
      document.getElementById("name9").textContent = language.eng.name9;
      document.getElementById("name10").textContent = language.eng.name10;
      document.getElementById("name16").textContent = language.eng.name16;
      document.getElementById("name17").textContent = language.eng.name17;
      document.getElementById("name18").textContent = language.eng.name18;
      document.getElementById("name19").textContent = language.eng.name19;
      document.getElementById("name20").textContent = language.eng.name20;
      document.getElementById("name22").textContent = language.eng.name22;
      document.getElementById("name23").textContent = language.eng.name23;
      document.getElementById("name25").textContent = language.eng.name25;
      document.getElementById("name26").textContent = language.eng.name26;
      document.getElementById("name30").textContent = language.eng.name30;
      document.getElementById("name31").textContent = language.eng.name31;
      document.getElementById("name32").textContent = language.eng.name32;
      document.getElementById("name34").textContent = language.eng.name34;
      document.getElementById("name35").textContent = language.eng.name35;
      document.getElementById("name36").textContent = language.eng.name36;
      document.getElementById("name37").textContent = language.eng.name37;
      document.getElementById("name38").textContent = language.eng.name38;
      document.getElementById("name39").textContent = language.eng.name39;
      document.getElementById("name40").textContent = language.eng.name40;
      document.getElementById("name41").textContent = language.eng.name41;
      document.getElementById("name42").textContent = language.eng.name42;
      document.getElementById("name43").textContent = language.eng.name43;
      document.getElementById("name44").textContent = language.eng.name44;
      document.getElementById("name45").textContent = language.eng.name45;
      document.getElementById("name46").textContent = language.eng.name46;
      document.getElementById("name48").textContent = language.eng.name48;
      document.getElementById("name49").textContent = language.eng.name49;
      document.getElementById("name50").textContent = language.eng.name50;
      document.getElementById("name51").textContent = language.eng.name51;
      document.getElementById("name53").textContent = language.eng.name53;
      document.getElementById("name54").textContent = language.eng.name54;
      document.getElementById("name55").textContent = language.eng.name55;
      document.getElementById("name56").textContent = language.eng.name56;
      document.getElementById("name57").textContent = language.eng.name57;
      document.getElementById("name58").textContent = language.eng.name58;
      document.getElementById("name59").textContent = language.eng.name59;
      document.getElementById("name60").textContent = language.eng.name60;
      document.getElementById("name61").textContent = language.eng.name61;
      document.getElementById("desc1").textContent = language.eng.desc1;
      document.getElementById("desc2").textContent = language.eng.desc2;
      document.getElementById("desc3").textContent = language.eng.desc3;
      document.getElementById("desc4").textContent = language.eng.desc4;
      document.getElementById("desc5").textContent = language.eng.desc5;
      document.getElementById("desc6").textContent = language.eng.desc6;
      document.getElementById("desc7").textContent = language.eng.desc7;
      document.getElementById("desc8").textContent = language.eng.desc8;
      document.getElementById("desc9").textContent = language.eng.desc9;
      document.getElementById("desc10").textContent = language.eng.desc10;
      document.getElementById("desc11").textContent = language.eng.desc11;
      document.getElementById("desc12").textContent = language.eng.desc12;
      document.getElementById("desc13").textContent = language.eng.desc13;
      document.getElementById("desc14").textContent = language.eng.desc14;
      document.getElementById("desc15").textContent = language.eng.desc15;
      document.getElementById("desc16").textContent = language.eng.desc16;
      document.getElementById("desc18").textContent = language.eng.desc18;
      document.getElementById("desc19").textContent = language.eng.desc19;
      document.getElementById("desc20").textContent = language.eng.desc20;
      document.getElementById("desc21").textContent = language.eng.desc21;
      document.getElementById("desc22").textContent = language.eng.desc22;
      document.getElementById("desc23").textContent = language.eng.desc23;
      document.getElementById("desc24").textContent = language.eng.desc24;
      document.getElementById("desc30").textContent = language.eng.desc30;
      document.getElementById("desc31").textContent = language.eng.desc31;
      document.getElementById("desc32").textContent = language.eng.desc32;
      document.getElementById("desc33").textContent = language.eng.desc33;
      document.getElementById("desc34").textContent = language.eng.desc34;
      document.getElementById("desc35").textContent = language.eng.desc35;
      document.getElementById("desc52").textContent = language.eng.desc52;
      document.getElementById("desc53").textContent = language.eng.desc53;
      document.getElementById("desc54").textContent = language.eng.desc54;
      document.getElementById("desc55").textContent = language.eng.desc55;
      document.getElementById("desc56").textContent = language.eng.desc56;
      document.getElementById("desc57").textContent = language.eng.desc57;
      document.getElementById("desc58").textContent = language.eng.desc58;
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
