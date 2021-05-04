const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("_id");

fetch("https://kea21s-5d8f.restdb.io/rest/product/" + id, {
  method: "GET",
  headers: {
    "x-apikey": "606d5ed3f553500431007503",
  },
})
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".price").textContent = product.price + ",-";
  document.querySelector(".productname").textContent = product.productname;
}
