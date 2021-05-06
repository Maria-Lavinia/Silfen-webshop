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
