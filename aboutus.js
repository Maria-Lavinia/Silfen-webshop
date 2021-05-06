//---------------------------- navigation -------------------------------
const navToggle = document.querySelector(".nav-toggle");
const categories = document.querySelector(".nav-categories");

navToggle.addEventListener("click", function () {
  categories.classList.toggle("show-categories");
});

const products = document.querySelector(".linkproducts");
const links = document.querySelector(".productlinks");

products.addEventListener("click", function () {
  links.classList.toggle("show-linkss");
});

const collections = document.querySelector(".linkcollections");
const linkss = document.querySelector(".collectionlinks");

collections.addEventListener("click", function () {
  linkss.classList.toggle("show-linkss");
});

const silfen = document.querySelector(".silfen");
const silfenplay = document.querySelector(".silfenplay");

silfen.addEventListener("click", function () {
    window.location.href = "index.html";
  silfen.classList.toggle("blue");
});
silfenplay.addEventListener("click", function () {
    window.location.href = "silfenplay.html";
  silfenplay.classList.toggle("blue");
});

//------------------------------------------------------ about us page -----------------------
let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .fromTo(".line1", { x: 0 }, { x: -600, duration: 2 })
  .to(".line2", 2, { x: 600 }, "-=2")
  .fromTo(".splash1", { x: 500 }, { x: 0, duration: 1 }, "-=2")
  .fromTo(".p1", { x: -400 }, { x: 0, duration: 2 }, "-=2")
  .fromTo(".girl", { opacity: 0 }, { opacity: 1, duration: 0.8 }, "-=1")
  .fromTo(".splash2", { x: -500 }, { x: 0, duration: 2 }, "-=2")
  .fromTo(".splash3", { x: 500 }, { x: 0, duration: 3 })
  .fromTo(".p2", { x: -500 }, { x: 0, duration: 2 }, "-=4")
  .fromTo(".p3", { x: 500 }, { x: 5, duration: 1.5 }, "-=2")
  .fromTo(".splash4", { x: -600 }, { x: 0, duration: 0.8 }, "-=2");

let scene = new ScrollMagic.Scene({
  triggerElement: "main",
  duration: "500%",
  triggerHook: 0,
})
  .setTween(timeline)
  .addTo(controller);
