//----------------------------- navigation ---------------
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
//  ------------------------sustainability -------------------------
let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".bg1", 2, { y: -500 })
  .to(".bg", 2, { y: -500 })
  .fromTo(".p1", { opacity: 0 }, { opacity: 1, duration: 3 }, "-=2")
  .fromTo(".splash1", { x: 700 }, { x: 0, duration: 3 }, "-=2")
  .fromTo(".splash2", { x: -700 }, { x: 0, duration: 3 }, "-=2")
  .fromTo(".pic1", { opacity: 0 }, { opacity: 1, duration: 4 }, "-=1")
  .fromTo(".p2", { opacity: 0 }, { opacity: 1, duration: 4 })
  .fromTo(".splash3", { x: -700 }, { x: 0, duration: 6 }, "-=7")
  .fromTo(".splash4", { x: 500 }, { x: 0, duration: 6 })
  .fromTo(".water , .p3", { x: -700 }, { x: 0, duration: 7 }, "-=9")
  .fromTo(".pic2", { opacity: 0 }, { opacity: 1, duration: 10 }, "-=5")
  .fromTo(".working , .p4", { x: 700 }, { x: 0, duration: 4 }, "-=5")
  .fromTo(".pic3", { opacity: 0 }, { opacity: 1, duration: 6 }, "-=2")
  .fromTo(".materials , .p5", { x: -700 }, { x: 0, duration: 4 }, "-=5")

  .fromTo(".pic4", { x: 700 }, { x: 0, duration: 4 }, "-=4")
  .fromTo(".p6", { x: -700 }, { x: 0, duration: 3 })
  .fromTo(".p7", { x: 700 }, { x: 0, duration: 6 });
let scene = new ScrollMagic.Scene({
  triggerElement: "main",
  duration: "730%",
  triggerHook: 0,
})
  .setTween(timeline)
  .addTo(controller);
