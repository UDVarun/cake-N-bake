const sweets = document.getElementsByClassName("sweet-box");
const cupcakes = document.getElementsByClassName("cupcake-box");
const cakes = document.getElementsByClassName("cake-box");
const doughnuts = document.getElementsByClassName("doughnut-box");

const sweetButton = document.getElementById("sweet-button");
const cupcakeButton = document.getElementById("cupcake-button");
const cakeButton = document.getElementById("cake-button");
const doughnutButton = document.getElementById("doughnut-button");
const displayAllButton = document.getElementById("all");

const searchBar = document.getElementById("search-bar");

const addToCart = document.getElementsByClassName("add-to-cart");
const price = document.getElementsByClassName("price");
const cart = document.getElementById("cart");
const clearCart = document.getElementById("clear");

const imageHolder = document.getElementsByClassName("image-holder");

// functions for the filters //

function itemDisplay(item) {
  for (let i = 0; i < item.length; i++) {
    item[i].style.display = "block";
  }
}

function stopItemDisplay(item) {
  for (let i = 0; i < item.length; i++) {
    item[i].style.display = "none";
  }
}

function cakeFilter() {
  itemDisplay(cakes);
  stopItemDisplay(cupcakes);
  stopItemDisplay(sweets);
  stopItemDisplay(doughnuts);
}

function cupcakeFilter() {
  stopItemDisplay(cakes);
  itemDisplay(cupcakes);
  stopItemDisplay(sweets);
  stopItemDisplay(doughnuts);
}

function sweetFilter() {
  stopItemDisplay(cakes);
  stopItemDisplay(cupcakes);
  itemDisplay(sweets);
  stopItemDisplay(doughnuts);
}

function doughnutFilter() {
  stopItemDisplay(cakes);
  stopItemDisplay(cupcakes);
  stopItemDisplay(sweets);
  itemDisplay(doughnuts);
}

function allFilter() {
  itemDisplay(cakes);
  itemDisplay(cupcakes);
  itemDisplay(sweets);
  itemDisplay(doughnuts);
}

// displaying the different filters via the buttons //

function buttonFilter(item, filter) {
  item.addEventListener("click", filter);
}

function itemFilter() {
  buttonFilter(cakeButton, cakeFilter);
  buttonFilter(cupcakeButton, cupcakeFilter);
  buttonFilter(sweetButton, sweetFilter);
  buttonFilter(cakeButton, cakeFilter);
  buttonFilter(doughnutButton, doughnutFilter);
  buttonFilter(displayAllButton, allFilter);
}



// adding items to basket and clearing it + alert when an item is added to basket//

var itemNumber = 0;
var items = " items - ₹";
var totalPrice = 0;

function itemName() {
  itemNumber === 1 ? (items = " item - ₹") : (items = " items - ₹");
}

function updateCart() {
  return (cart.innerText = itemNumber + items + totalPrice.toFixed(2));
}

function alertTotal() {
  return alert(
    "Your Shopping Basket Total is " +
    "₹" +
    totalPrice.toFixed(2) +
    "\n You have " +
    itemNumber +
    " item(s) in your Basket"
  );
}

function addToBasket(num) {
  addToCart[num].addEventListener("click", function () {
    itemNumber++;
    totalPrice += parseFloat(price[num].innerText);
    itemName();
    updateCart();
    alertTotal();
  });
}

function eachItem() {
  for (let i = 0; i < imageHolder.length; i++) {
    addToBasket(i);
  }
}

function clearShoppingCart() {
  clearCart.addEventListener("click", function () {
    cart.innerText = "0 Items";
    itemNumber = 0;
    totalPrice = 0;
  });
}

// calling the functions //

itemName();
itemFilter();
textBarSearch();
eachItem();
clearShoppingCart();
