document.addEventListener("DOMContentLoaded", () => {
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
