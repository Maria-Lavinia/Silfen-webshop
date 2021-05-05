const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("_id");

fetch(
  "https://kea21s-5d8f.restdb.io/rest/product/" + id ,
  {
    method: "GET",
    headers: {
      "x-apikey": "606d5ed3f553500431007503",
    },
  }
)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".price").textContent = product.price + ",-";
  document.querySelector(".productname").textContent = product.productname;
}

// function showProduct(product) {
//   const template = document.querySelector("#product").content;
//   //clone it
//   const copy = template.cloneNode(true);
//   //change content
//   copy.querySelector(".productname").textContent = product.productname;
//   copy.querySelector(".price").textContent = product.price + " DKK";
//   //copy.querySelector(
//   // ".productimage"
//   // ).textContent = `https://kea-alt-del.dk/t7/images/webp/640/${product._id}.JPG`;
//   //   copy.querySelector("a").href = `product.html?_id=${product._id}`;
//   //find the daddy
//   const parent = document.querySelector("main");
//   //append it
//   parent.appendChild(copy);
// }
