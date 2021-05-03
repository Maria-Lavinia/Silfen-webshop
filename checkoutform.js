const form = document.querySelector("form");

form.addEventListener("submit", userSubmitted);

function userSubmitted(evt) {
  evt.preventDefault();

  const payload = {
    name: form.elements.name.value,
    email: form.elements.email.value,
    address: form.elements.adr.value,
    city: form.elements.city.value,
    postalcode: form.elements.pcode.value,
    cvv: form.elements.cvv.value,
    nameoncard: form.elements.cname.value,
    cardnumber: form.elements.ccnum.value,
  };
  document.querySelector("input[type=submit]").disabled = true;

  fetch("https://kea2021-8b3d.restdb.io/rest/orders", {
    method: "POST",
    headers: {
      "x-apikey": "606d5edcf553500431007504",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      console.log(response);
      document.querySelector("input[type=submit]").disabled = false;
      form.elements.name.value = "";
      form.elements.email.value = "";
      form.elements.adr.value = "";
      form.elements.city.value = "";
      form.elements.pcode.value = "";
      form.elements.cvv.value = "";
      form.elements.cname.value = "";
      form.elements.ccnum.value = "";
    })
    .catch((err) => {
      console.error(err);
    });
}
