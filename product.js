$(document).ready(function () {
  $(".color-choose input").on("click", function () {
    var bagColor = $(this).attr("data-image");

    $(".active").removeClass("active");
    $(".left-column img[data-image = " + bagColor + "]").addClass("active");
    $(this).addClass("active");
  });
});

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("_id");

fetch("https://kea21s-5d8f.restdb.io/rest/product/" + id + "?fetchchildren=true", {
  method: "GET",
  headers: {
    "x-apikey": "606d5ed3f553500431007503",
  },
})
  .then((res) => res.json())
  .then((data) => showProduct(data));
 

function showProduct(product) {
  console.log(product);
  document.querySelector(".breadcrumbs .productname").textContent =
    product.productname;
  document.querySelector(".product-price span").textContent =
    product.price + ",-";
  document.querySelector("h1").textContent = product.productname;
  document.querySelector("p").textContent = product.description;

  const template = document.querySelector (".review").content; 
  product.reviews.forEach(review =>{
    console.log(review);
    const clone = template.cloneNode(true);
    clone.querySelector("h4").textContent = review.username;
    clone.querySelector(".description").textContent = review.content;
    document.querySelector(".reviewList").appendChild(clone);
  });
  if (product.reviews.length === 0){
    const clone= template.cloneNode(true);
    clone.querySelector("h4").textContent = "No reviews yet. Be the first one!";
    clone.querySelector(".description").textContent = "";
    document.querySelector(".reviewList").appendChild(clone);

  }

}

const form = document.querySelector("#reviewForm");
form.addEventListener("submit", handleSubmit);

function handleSubmit(e){
  e.preventDefault();
  const payload = {
   email: form.elements.email.value,
   username: form.elements.username.value,
   content: form.elements.content.value,
  };
  document.querySelector("input[type=submit]").disabled = true;
 

fetch(`https://kea21s-5d8f.restdb.io/rest/product/${id}/reviews`, {
  method: "POST",
  headers: {
    "x-apikey": "606d5ed3f553500431007503",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(payload),
})
.then(res=>res.json())
.then((review) => {

  const template = document.querySelector(".review").content;
  const copy = template.cloneNode(true);
  copy.querySelector("h4").textContent = review.username;
  copy.querySelector(".description").textContent = review.content;
  document.querySelector(".reviewList").appendChild(copy);
  document.querySelector("p.hidden").classList.remove("hidden");
 
  document.querySelector("input[type=submit]").disabled = false;
  form.elements.email.value = "";
  form.elements.username.value = "";
  form.elements.content.value = "";
});
}

