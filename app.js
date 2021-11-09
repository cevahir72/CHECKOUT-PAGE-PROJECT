let quantityController = document.querySelectorAll(".quantity-controller");
const vintagePrice = document.querySelector("#vintage-price").innerHTML;
const shoePrice = document.querySelector("#shoe-price").innerHTML;
const clockPrice = document.querySelector("#clock-price").innerHTML;
const productsTotals = document.getElementsByClassName("product-line-price");
const subTotal = document.getElementById("sub-total");
const taxTotal = document.getElementById("tax-total");
const tTotal = document.getElementById("total");
const shipPrice = document.getElementById("shipping-price");
const removeBtn = document.getElementsByClassName("remove-product");
let defPrice = vintagePrice;

for (const button of quantityController) {
  button.addEventListener("click", selector);
}
for (const bttn of removeBtn) {
  bttn.addEventListener("click", remover);
}

function pricing() {
  let toplam = 0;
  for (const pricess of productsTotals) {
    toplam += parseFloat(pricess.innerHTML);
  }
  subTotal.innerHTML = toplam.toFixed(2);
  shipPrice.innerHTML = (7 + 8).toFixed(2);
  let shipPrice2 = 15;
  if (subTotal.innerHTML == "0.00") {
    shipPrice.innerHTML = "0.00";
    shipPrice2 = 0;
  }
  taxTotal.innerHTML = ((toplam * 18) / 100).toFixed(2);
  tTotal.innerHTML = (toplam + (toplam * 18) / 100 + shipPrice2).toFixed(2);
}

function remover(e) {
  e.target.parentElement.parentElement.parentElement.remove();
  pricing();
}

function selector(e) {
  let target = e.target;
  if (
    target.parentElement.previousElementSibling.previousElementSibling
      .innerHTML == "Vintage Backbag"
  ) {
    defPrice = vintagePrice;
  } else if (
    target.parentElement.previousElementSibling.previousElementSibling
      .innerHTML == "Levi Shoes"
  ) {
    defPrice = shoePrice;
  } else if (
    target.parentElement.previousElementSibling.previousElementSibling
      .innerHTML == "Antique Clock"
  ) {
    defPrice = clockPrice;
  }

  if (target.classList[0] === "minus") {
    let countEl = target.nextElementSibling;
    if (countEl.innerHTML >= 1) {
      countEl.innerHTML = parseInt(countEl.innerHTML) - 1;
      let total = target.parentElement.nextElementSibling.nextElementSibling;
      total.innerText = (
        parseFloat(total.innerHTML) - parseFloat(defPrice)
      ).toFixed(2);
    }
  }
  if (target.classList[0] === "plus") {
    let countEl = target.previousElementSibling;
    countEl.innerHTML = parseInt(countEl.innerHTML) + 1;
    let total = target.parentElement.nextElementSibling.nextElementSibling;
    total.innerText = (
      parseFloat(total.innerHTML) + parseFloat(defPrice)
    ).toFixed(2);
  }
  pricing();
}
