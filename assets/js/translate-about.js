/* LANGUAGE */
//Define window reload anchors
const dataReload = document.querySelectorAll("[data-reload]");

//Language translations
const language = {
  eng: {
    about: "ABOUT US",
    who: "WHO IS CORNELIUS?",
    abs1: `An unusal scene took our breath away that morning while cleaning the attic of our great grandfather's home in Vračar. On the dusty floor, tucked away in the corner, lay an old overturned cylinder with a letter sticking out of its torn lining. Confusion and curiosity painted our faces as we read the contents of the yellow scrap paper. It looked as if it container centuries worth of memories. `,
    abs2: `"My name is Cornelius. I was born in the year 3985. For as long as I can remember, I have worn the uniform of Her Majesty The Queen of Adventure. I've travelled through forgotten times and encountered adventures of worlds yet to come. In the idleness of my unending existence, I've been a spaceship pilot, hunter, tailor, sailboat builder, cosmonaut, the royal family postmaster and so much more. A soldier by profession and an artist at heart, I took pleasure in creating culinary masterpieces. The shining smiles on friends' faces and the pure unadulterated bliss of our joint ventures were my greatest victories and the most precious spoils of war. Now, I'm the Defence Commander against boredom at the Ministry Against Stereotypes. If you happened upon my hat and this letter in it, the time has come for you to follow me. I invite you to, together, with the unbreakable power of imagination, build a new reality. We will invent a future in which wealth is no longer defined by what you have, but by your enjoyments. I await you here."`,
    abs3: `We accepted the challenge. Where once stood an old, ruined house, we raised a temple dedicated to the immortal spirit of friendship, music, exquisite flavors, fun, and good times.`,
    welcome: `Welcome to Cornelius & Cylinder`
  }
};

//Check if on menu page
if (window.location.href.indexOf("about") > -1) {
  //Define language via window hash
  if (window.location.hash) {
    if (window.location.hash === "#eng") {
      document.getElementById("abs-about").textContent = language.eng.about;
      document.getElementById("abs-who").textContent = language.eng.who;
      document.getElementById("abs-eng").textContent = language.eng.abs1;
      document.getElementById("abs-eng-2").textContent = language.eng.abs2;
      document.getElementById("abs-eng-3").textContent = language.eng.abs3;
      document.getElementById("welcome").textContent = language.eng.welcome;
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
