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

// /* When the user clicks on the button,
// toggle between hiding and showing the dropdown content */
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

fetch("https://kea21s-5d8f.restdb.io/rest/product", {
  method: "GET",
  headers: {
    "x-apikey": "606d5ed3f553500431007503",
  },
})
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductlist(data);
  });

function handleProductlist(data) {
  //console.log(data);
  data.forEach(showProduct);
}

function showProduct(product) {
  const template = document.querySelector("#product").content;
  //clone it
  const copy = template.cloneNode(true);
  //change content
  copy.querySelector("h3").textContent = product.productname;
  copy.querySelector(".price").textContent = product.price + " DKK";
  copy.querySelector(".productimage").src = product.productimage;
  copy.querySelector("a").href = `product.html?_id=${product._id}`;
  //find the daddy
  const parent = document.querySelector("main");
  //append it
  parent.appendChild(copy);
}
// let cart = document.querySelector;
