const juegosContainer = document.querySelector(".juegos-container");
const productsCart = document.querySelector(".cart-container"); //carrito
const total = document.querySelector(".total");
const categoriesContainer = document.querySelector(".categories");
const categoriesList = document.querySelectorAll(".category"); //NodeList || NO ES UN ARRAY []
const showMoreBtn = document.querySelector(".btn-load");
const buyBtn = document.querySelector(".btn-buy");
const cartBubble = document.querySelector(".cart-bubble");
const cartBtn = document.querySelector(".cart-label");
const menuBtn = document.querySelector(".menu-label");
const cartMenu = document.querySelector(".cart");
const barsMenu = document.querySelector(".navbar-list");
const overlay = document.querySelector(".overlay");
const successModal = document.querySelector(".add-modal"); // react-hot-toast
const deleteBtn = document.querySelector(".btn-delete");

// seteamos el carrito
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const createProductTemplate = (product) => {
  const { id, name, price, year, category, consoleImg, cardImg } = product;
  return `
    <div class="product">
    <img src=${cardImg} alt=${name} />
    <div class="product-info">

        <div class="product-top">
            <h3>${name}</h3>
            <p>Current Bid</p>
        </div>

        <div class="product-mid">
            <div class="product-user">
                <img src=${consoleImg} alt="consola" />
                <p>@${category}</p>
            </div>
            <span>${price} $ARS</span>
        </div>


        <div class="product-bot">
            <div class="product-offer">
                <div class="offer-time">
                    <img src="./assets/img/fire.png" alt="" />
                    <p>05:12:07</p>
                </div>
                <button class="btn-add"
                data-id='${id}'
                data-name='${name}'
                data-price='${price}'
                data-img='${cardImg}'>Add</button>
            </div>
        </div>
    </div>
</div>`;
};

const renderProducts = (productList) => {
  juegosContainer.innerHTML += productList.map(createProductTemplate).join("");
};

const isLastIndexOf = () => {
  return appState.currentProductsIndex === appState.productsLimit - 1;
};

const showMoreProducts = () => {
  appState.currentProductsIndex += 1;
  let { products, currentProductsIndex } = appState;
  renderProducts(products[currentProductsIndex]);
  if (isLastIndexOf()) {
    showMoreBtn.classList.add("hidden");
  }
};

const setShowMoreVisibility = () => {
  if (!appState.activeFilter) {
    showMoreBtn.classList.remove("hidden");
    return;
  }
  showMoreBtn.classList.add("hidden");
};
