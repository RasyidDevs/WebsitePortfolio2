// SEARCH FORM START
const sf = document.querySelector(".search-form");
const sb = document.querySelector("#search-button");
document.querySelector("#search-button").onclick = (e) => {
  sf.classList.toggle("active");
  e.preventDefault();
  sf.focus();
};
document.addEventListener("click", (e) => {
  if (!sb.contains(e.target) && !sf.contains(e.target)) {
    sf.classList.remove("active");
    e.preventDefault();
  }
});
// SEARCH FORM END

// SHOPPING CART START
const sc = document.querySelector(".shopping-cart");
const shopBar = document.querySelector("#shop-bar");
const navtog = document.querySelector(".navbar-toggler");
var removeButton = document.getElementsByClassName("remove");
document.querySelector("#shop-bar").onclick = (e) => {
  sc.classList.toggle("jalan");
  e.preventDefault();
};

// CART FUNCTIONALITY

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  var removeButton = document.getElementsByClassName("remove");
  for (var i = 0; i < removeButton.length; i++) {
    var button = removeButton[i];
    button.addEventListener("click", MenghapusCart);
  }
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
  }
  document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}
// Menambahkan item ke dalam tampilan keranjang
function addToCartClicked(event) {
  var button = event.target;
  var shopItem = button.parentElement.parentElement.parentElement;
  var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
  var price = shopItem.getElementsByClassName("harga")[0].innerText;
  var imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src;

  // Menambahkan item ke dalam keranjang belanja

  addItemToCart(title, price, imageSrc);
  feather.replace();
  var cartRows = document.getElementsByClassName("cart-row");
  var lastCartRow = cartRows[cartRows.length - 1];
  var removeButton = lastCartRow.querySelector(".remove");
  removeButton.addEventListener("click", MenghapusCart);
  mengubahTotal();
}
function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("row", "cart-row");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  var cartItemNames = cartItems.getElementsByClassName("cart-item-title");

  // Memeriksa apakah item sudah ada di dalam keranjang
  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      // Menampilkan pesan peringatan jika item sudah ada di keranjang
      alert("This item is already added to the cart");
      return;
    }
  }
  var cartRowContents = `
<div class="col-md-5 col-5 col-sm-5">
  <div
    class="cart-item d-flex justify-content-center align-items-center"
  >
    <img
      src="${imageSrc}"
      class="img-fluid cart-item-image "
      alt=""
    />
    <span
      class="pl-2 cart-item-title"
      style="
        font-weight: bold;
        font-family: 'Bebas Neue', sans-serif;
      "
      >${title}</span
    >
  </div>
</div>
<div
  class="col-md-3 col-3 col-sm-3 d-flex justify-content-center align-items-center"
>
  <span class="cart-price">${price}</span>
</div>
<div
  class="col-md-3 col-3 col-sm-3 d-flex justify-content-center align-items-center"
>
  <input type="number" value="1" class="cart-quantity-input" />
  <i data-feather="trash-2" class="ml-2 remove"></i>
</div>
`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow
    .getElementsByClassName("remove")[0]
    .addEventListener("click", MenghapusCart);


  cartRow
    .getElementsByClassName("cart-quantity-input")[0]
    .addEventListener("change", quantityChanged);
}

var quantityInputs = document.getElementsByClassName("cart-quantity-input");
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  } else {
    mengubahTotal();
  }
  console.log(input);
}

var addToCartButtons = document.getElementsByClassName("btnduk");

function purchaseClicked() {
  alert("Thank you for your purchase");

  var cartItems = document.getElementsByClassName("cart-items")[0];
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }

  mengubahTotal();
}

function MenghapusCart() {
  document
    .querySelector(".cart-items")
    .addEventListener("click", function (event) {
      if (event.target.classList.contains("remove")) {
        event.target.parentElement.parentElement.remove();
        mengubahTotal();
      }
    });
}

function mengubahTotal() {
  var cartItemsContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemsContainer.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var jumlahElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    var price = parseFloat(
      priceElement.innerText.replace("Rp", "").replace("K", "")
    );
    var quantity = jumlahElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "Rp" + total + "K";
}

//SHOPPING CART END
// LOGIN START
const lg = document.querySelector("#navLogin");
const lgn = document.querySelector("#login");
const login = document.querySelector(".log");
const close = document.querySelector("#close-icon");
document.querySelector("#navLogin").onclick = (e) => {
  lgn.classList.toggle("actives");
  e.preventDefault();
};
document.addEventListener("click", (e) => {
  if (!login.contains(e.target) && !lg.contains(e.target) ) {
    lgn.classList.remove("actives");
    e.preventDefault();
  }
});
close.addEventListener("click", (e) => {
  lgn.classList.remove("actives");
  create.classList.remove("actives")
  e.preventDefault();
});
//LOGIN END
// CREATE ACCOUNT START
const cl = document.querySelector("#createlink")
const create = document.getElementById("login2")
const close2  = document.getElementById("close-icon2")
cl.addEventListener("click", ()=>{
  lgn.classList.remove("actives")
  create.classList.add("actives")
})
close2.addEventListener("click" , ()=>{
  create.classList.remove("actives")
})
