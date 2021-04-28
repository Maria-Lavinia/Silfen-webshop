
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
  //   window.location.href = "index.html";-------need to add this when other pages ready
  silfen.classList.toggle("blue");
});
silfenplay.addEventListener("click", function () {
  //   window.location.href = "index.html";-------need to add this when other pages ready
  silfenplay.classList.toggle("blue");
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
function handleProductList(data) {
   console.log(data)
/data.forEach(showProduct);

function showProduct(product) {
   console.log(product);
  //grab the template
  
  const template = document.querySelector("#product").content;
    //clone it
  const copy = template.cloneNode(true);
  //change content
    copy.querySelector("h3").textContent = product.productname;
    copy.querySelector(".price").textContent = product.price + " DKK";
    copy.querySelector("img.productimage").alt = product.productname;
      const parent = document.querySelector("main");
      //append it
    parent.appendChild(copy);
}
}