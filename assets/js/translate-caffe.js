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
    caffeBar: "CAFFE-BAR",
    restaurant: "RESTAURANT",
    coffee: "COFFEE",
    hot: "HOT DRINKS",
    fruitTea: "FRUIT TEA",
    blackTea: "BLACK TEA",
    herbalTea: "HERBAL TEA",
    greenTea: "GREEN TEA",
    juices: "JUICES",
    squeezed: "SQUEEZED JUICES",
    water: "WATER",
    juice: "JUICE",
    energy: "ENERGY DRINK",
    alcohol: "ALCOHOLIC DRINKS",
    tequila: "TEQUILA",
    liquor: "LIQUOR",
    whisky: "WHISKY",
    brandyCognac: "BRANDY & COGNAC",
    cognac: "COGNAC",
    wine: "WINE",
    whiteWine: "WHITE WINE 0.75",
    rose: "ROSÉ WINE 0.75",
    houseWine: "HOUSE WINE 0.15",
    redWine: "RED WINE 0.75",
    sparklingDessert: "SPARKLING / DESSERT WINE",
    dessertWine: "DESSERT WINE",
    beer: "BEER",
    draftBeer: "DRAFT BEER",
    bottledBeer: "BOTTLED BEER",
    cocktails: "COCKTAILS",
    main: "MAIN PAGE",
    name1: "DOUBLE ESPRESSO",
    name2: "ESPRESSO WITH MILK",
    name3: "MACCHIATO",
    name4: "CAPPUCCINO",
    name5: "ESPRESSO DECAF",
    name6: "INSTANT COFFEE",
    name7: "DOMESTIC COFFEE",
    name8: "CREAM",
    name9: "MILK 0.03",
    name10: "SOYA MILK 0.03",
    name11: "HONEY",
    name12: "RUM 0.03",
    name13: "ERACLEA HOT CHOCOLATE",
    name14: "ALTHAUS TEA",
    name15: "CLASSIC LEMONADE",
    name16: "HOUSE LEMONADE 'C&C'",
    name17: "HAPPY ORANGE 0.30",
    name18: "GENIUS GRAPEFRUIT 0.30",
    name19: "FRESH PINEAPPLE 0.30",
    name20: "BOTTLED WATER 0.33",
    name21: "BOTTLED WATER 0.75",
    name22: "BOTTLED WATER 0.25",
    name23: "BOTTLED WATER 0.75",
    name24: "SPARKLING WATER 0.25",
    name25: "SPARKLING WATER 0.75",
    name26: "SPARKLING LEMONGRASS WATER 0.33",
    name27: "QUINCE BRANDY 'NOSTALGIJA' ZARIĆ",
    name28: "APRICOT BRANDY VOĆAR KOPAONIK",
    name29: "PEAR BRANDY MANASTIR KOVILJ",
    name30: "PLUM BRANDY STARA SOKOLOVA 5 YEAR OLD",
    name31: "PLUM BRANDY BOJKOVČANKA",
    name32: "HONEY BRANDY",
    name33: "GRAPE BRANDY KRUNA",
    name34: "ZAJEČARSKO LIGHT BEER 0.30",
    name35: "ZAJEČARSKO LIGHT BEER 0.50",
    name36: "KOZEL PALE BEER 0.30",
    name37: "KOZEL PALE BEER 0.50",
    name38: "KOZEL DARK BEER 0.30",
    name39: "KOZEL DARK BEER 0.50",
    name40: "O'HARAS DARK BEER 0.50",
    name41: "O'HARAS DARK BEER 0.50",
    name42: "PAULANER WEISSBIER 0.30",
    name43: "PAULANER WEISSBIER 0.50",
    name44: "CRAFT GUEST",
    desc1: "this amazing drink is a combination of sweet red oranges",
    desc2:
      "an amazing fruit cocktail that combines the pleasant sour taste of kiwi and pineapple with wild cherry",
    desc3:
      "this infusion is made from a fruit mix with a taste of almond pie and baked apples",
    desc4:
      "cinnamon, orange and almond in combination with Indian and Ceylon black tea",
    desc5:
      "mix of tea from Ceylon and China, with a taste of bergamot and lemon",
    desc6: "mild and calming tea made of first class camomile leaves",
    desc7: "refreshing herbal mix with ginger based on Ayurveda tradition",
    desc8: "tasteful jasmine tea with a sharp taste and deep aroma",
    desc9: "delicate taste mixed with spearmint",
    desc10: "lemon, coconut, passion fruit, mint",
    desc11: "lemon, basil, vanilla, watermelon",
    desc12: "pineapple, orange, apple, cinnamon",
    desc13: "green apple, ginger, green celery",
    desc14: "beetroot, red apple, carrot",
    desc15: "coconut milk, banana, lime, oatflakes",
    desc16: "a citrus fruit aroma, with a mineral taste",
    desc17: "dry wine with an aroma of pineapple, ginger, litchi and incense",
    desc18:
      "dry wine with an aroma of pear, melon, apricot, toast, vanilla and nuts",
    desc19: "dry wine with a flowery and herbal aroma, and a mineral taste",
    desc20: "a crystal clear dry wine wth a fig and almond",
    desc21: "dry wine with a mineral and fruity taste",
    desc22:
      "dry wine with a green-yellow colour and a taste of grapefruit and exotic fruits",
    desc23: "dry wine with a fresh citrus and green apple aroma",
    desc24:
      "dry wine with a refreshing taste, a green-yellow colour, and a vanilla, backberry and almond aroma",
    desc25:
      "dry wine with a refreshing and complex taste and a lemond and grapefruit aroma",
    desc26: "elegant aromas of raspberries, peaches and white roses",
    desc27:
      "dry wine with a smell of wild strawberries, wild rose, Turkish delight, and sweet spice",
    desc28: "wine with the colour of red rubin with a taste of blackcurrant",
    desc29: "aroma of mature berries and pepper",
    desc30: "a full-bodied dry wine",
    desc31: "red ruby colour with a taste of red and black berries",
    desc32:
      "dark red wine with an aroma of prunes, blackberries and blueberries",
    desc33: "a tantalizing aroma of fresh coffee and ripe cherries",
    desc34:
      "sophisticated wine with a taste of baked peppers, mushrooms and cocoa",
    desc35:
      "dry wine with a rubin red colour and gentle taste of black currant and pure aroma",
    desc36: "harmoniously fresh dry wine with a dash of spices and eucalyptus",
    desc37:
      "dry wine with a deepred colour and a mature cherry, plum and mocca coffee aroma",
    desc38:
      "unfiltered ale, made from special hops from north-western America. fruity and flowery aroma with a tropical note of grapefruit, tangerine and eldeflower",
    desc39:
      "a favorite beer amongst river dock workers with a taste of delicate chocolate and coffee",
    desc40:
      "harmoniously mixed palette of colours and scents. from the fines flower aromas to scents of melon, mange and tangerine",
    desc41: "foamy and refreshing ginger beer",
    desc42: "a specialty with lots of hops and mal wrapped with Russian soul",
    desc43:
      "classic bavarian light beer, easy and refreshing drink from aromatic hops and mal",
    desc44: "unpasteurised Czech beer with a distinct taste and aroma of yeast",
    desc45:
      "Dutch 'Golden dragon', symbol of the city Ghent. Has an aroma of caramelised sugar, caramel and chocolate",
    desc46: "fruity sweet-sour beer with added raspberry. delicacy in itself",
    desc47:
      "bitter beer from South Africa for a perfect end to your week. with a smell of caramel, apple and red fruit shake",
    desc48:
      "this exquisite beer was cooked in honour of Emperor Charles V, the most powerful man of the first half of 16th century. it is made exclusively of Belgian ingredients and has an extremely full bodied taste. according to RateBeer website, it a has a 100/100 grade."
  }
};

//Check if on menu page
if (window.location.href.indexOf("menu-caffe") > -1) {
  //Define language via window hash
  if (window.location.hash) {
    if (window.location.hash === "#eng") {
      document.getElementById("lang-main").textContent = language.eng.main;
      document.getElementById("lang-about").textContent = language.eng.about;
      document.getElementById("lang-gallery").textContent =
        language.eng.gallery;
      document.querySelectorAll(".coffee").forEach(coffee => {
        coffee.textContent = language.eng.coffee;
      });
      document.querySelectorAll(".hot").forEach(hot => {
        hot.textContent = language.eng.hot;
      });
      document.getElementById("fruitTea").textContent = language.eng.fruitTea;
      document.getElementById("blackTea").textContent = language.eng.blackTea;
      document.getElementById("herbalTea").textContent = language.eng.herbalTea;
      document.getElementById("greenTea").textContent = language.eng.greenTea;
      document.getElementById("juices").textContent = language.eng.juices;
      document.getElementById("squeezed").textContent = language.eng.squeezed;
      document.getElementById("water").textContent = language.eng.water;
      document.getElementById("juice").textContent = language.eng.juice;
      document.getElementById("energy").textContent = language.eng.energy;
      document.getElementById("alcohol").textContent = language.eng.alcohol;
      document.getElementById("tequila").textContent = language.eng.tequila;
      document.getElementById("liquor").textContent = language.eng.liquor;
      document.getElementById("whisky").textContent = language.eng.whisky;
      document.getElementById("brandyCognac").textContent =
        language.eng.brandyCognac;
      document.getElementById("cognac").textContent = language.eng.cognac;
      document.getElementById("wine").textContent = language.eng.wine;
      document.getElementById("whiteWine").textContent = language.eng.whiteWine;
      document.getElementById("rose").textContent = language.eng.rose;
      document.getElementById("houseWine").textContent = language.eng.houseWine;
      document.getElementById("redWine").textContent = language.eng.redWine;
      document.getElementById("sparklingDessert").textContent =
        language.eng.sparklingDessert;
      document.getElementById("dessertWine").textContent =
        language.eng.dessertWine;
      document.getElementById("beer").textContent = language.eng.beer;
      document.getElementById("draftBeer").textContent = language.eng.draftBeer;
      document.getElementById("bottledBeer").textContent =
        language.eng.bottledBeer;
      document.getElementById("cocktails").textContent = language.eng.cocktails;
      document.getElementById("caffeBar").textContent = language.eng.caffeBar;
      document.getElementById("restaurant").textContent =
        language.eng.restaurant;
      document.getElementById("name1").textContent = language.eng.name1;
      document.getElementById("name2").textContent = language.eng.name2;
      document.getElementById("name3").textContent = language.eng.name3;
      document.getElementById("name4").textContent = language.eng.name4;
      document.getElementById("name5").textContent = language.eng.name5;
      document.getElementById("name6").textContent = language.eng.name6;
      document.getElementById("name7").textContent = language.eng.name7;
      document.getElementById("name8").textContent = language.eng.name8;
      document.getElementById("name9").textContent = language.eng.name9;
      document.getElementById("name10").textContent = language.eng.name10;
      document.getElementById("name11").textContent = language.eng.name11;
      document.getElementById("name12").textContent = language.eng.name12;
      document.getElementById("name13").textContent = language.eng.name13;
      document.getElementById("name14").textContent = language.eng.name14;
      document.getElementById("name15").textContent = language.eng.name15;
      document.getElementById("name16").textContent = language.eng.name16;
      document.getElementById("name17").textContent = language.eng.name17;
      document.getElementById("name18").textContent = language.eng.name18;
      document.getElementById("name19").textContent = language.eng.name19;
      document.getElementById("name20").textContent = language.eng.name20;
      document.getElementById("name21").textContent = language.eng.name21;
      document.getElementById("name22").textContent = language.eng.name22;
      document.getElementById("name23").textContent = language.eng.name23;
      document.getElementById("name24").textContent = language.eng.name24;
      document.getElementById("name25").textContent = language.eng.name25;
      document.getElementById("name26").textContent = language.eng.name26;
      document.getElementById("name27").textContent = language.eng.name27;
      document.getElementById("name28").textContent = language.eng.name28;
      document.getElementById("name29").textContent = language.eng.name29;
      document.getElementById("name30").textContent = language.eng.name30;
      document.getElementById("name31").textContent = language.eng.name31;
      document.getElementById("name32").textContent = language.eng.name32;
      document.getElementById("name33").textContent = language.eng.name33;
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
      document.getElementById("desc17").textContent = language.eng.desc17;
      document.getElementById("desc18").textContent = language.eng.desc18;
      document.getElementById("desc19").textContent = language.eng.desc19;
      document.getElementById("desc20").textContent = language.eng.desc20;
      document.getElementById("desc21").textContent = language.eng.desc21;
      document.getElementById("desc22").textContent = language.eng.desc22;
      document.getElementById("desc23").textContent = language.eng.desc23;
      document.getElementById("desc24").textContent = language.eng.desc24;
      document.getElementById("desc25").textContent = language.eng.desc25;
      document.getElementById("desc26").textContent = language.eng.desc26;
      document.getElementById("desc27").textContent = language.eng.desc27;
      document.getElementById("desc28").textContent = language.eng.desc28;
      document.getElementById("desc29").textContent = language.eng.desc29;
      document.getElementById("desc30").textContent = language.eng.desc30;
      document.getElementById("desc31").textContent = language.eng.desc31;
      document.getElementById("desc32").textContent = language.eng.desc32;
      document.getElementById("desc33").textContent = language.eng.desc33;
      document.getElementById("desc34").textContent = language.eng.desc34;
      document.getElementById("desc35").textContent = language.eng.desc35;
      document.getElementById("desc36").textContent = language.eng.desc36;
      document.getElementById("desc37").textContent = language.eng.desc37;
      document.getElementById("desc38").textContent = language.eng.desc38;
      document.getElementById("desc39").textContent = language.eng.desc39;
      document.getElementById("desc40").textContent = language.eng.desc40;
      document.getElementById("desc41").textContent = language.eng.desc41;
      document.getElementById("desc42").textContent = language.eng.desc42;
      document.getElementById("desc43").textContent = language.eng.desc43;
      document.getElementById("desc44").textContent = language.eng.desc44;
      document.getElementById("desc45").textContent = language.eng.desc45;
      document.getElementById("desc46").textContent = language.eng.desc46;
      document.getElementById("desc47").textContent = language.eng.desc47;
      document.getElementById("desc48").textContent = language.eng.desc48;
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
