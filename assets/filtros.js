const productsContainer = document.querySelector(".games-container");
const productsCart = document.querySelector(".cart-container");
const total = document.querySelector(".total");
const categoriesContainer = document.querySelector(".categories");
const categoriesList = document.querySelectorAll(".category");
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

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const createProductTemplate = (product) => {
  const { id, name, price, year, consoleImg, cardImg } = product;
  return `
    <div class="product">
    <img src=${cardImg} alt=${name} />
    <div class="product-info">

        <div class="product-top">
            <h3>${name}</h3>
        </div>

        <div class="product-mid">
            <div class="product-user">
                <img src=${consoleImg} alt="" />
            </div>
            <span>${price} $ARS</span>
        </div>


        <div class="product-bot">
            <div class="product-offer">
                <div class="offer-time">
                    <p>Año:${year}</p>
                </div>
                <button class="btn-add"
                data-id='${id}'
                data-name='${name}'
                data-bid='${price}'
                data-img='${cardImg}'>Agregar</button>
            </div>
        </div>
    </div>
</div>`;
};

const renderProducts = (productList) => {
  productsContainer.innerHTML += productList
    .map(createProductTemplate)
    .join("");
};
// Ver más //
/////////////////////////////////////////////

const isLastIndexOf = () => {
  return appState.currentProductsIndex === appState.productsLimit - 1;
};

// Función par arenderizar mpas productos cuando la persona pariete ver más

const showMoreProducts = () => {
  appState.currentProductsIndex += 1;
  let { products, currentProductsIndex } = appState;
  renderProducts(products[currentProductsIndex]);
  if (isLastIndexOf()) {
    showMoreBtn.classList.add("hidden");
  }
};

// función para mostrar u ocultar el boton de ver más

const setShowMoreVisibility = () => {
  if (!appState.activeFilter) {
    showMoreBtn.classList.remove("hidden");
    return;
  }
  showMoreBtn.classList.add("hidden");
};

// Lógica de los filtros

// Fucnión para cambiar el estado de los botones del filtro/categorias
const changeBtnActiveState = (selectedCategory) => {
  const categories = [...categoriesList];
  categories.forEach((categoryBtn) => {
    if (categoryBtn.dataset.category !== selectedCategory) {
      categoryBtn.classList.remove("active");
      return;
    }
    categoryBtn.classList.add("active");
  });
};

//Función para cambiar el estado del filtro activo

const changeFilterState = (btn) => {
  appState.activeFilter = btn.dataset.category;
  changeBtnActiveState(appState.activeFilter);
  setShowMoreVisibility(appState.activeFilter);
};

// Función para si el elemento que se apretó es un boton de categoria y no esta activo
const isInactiveFilterBtn = (element) => {
  return (
    element.classList.contains("category") &&
    !element.classList.contains("active")
  );
};

// funcion para aplicar el filtro cuando se apreta un boton de categoria
//
const applyFilter = (event) => {
  const { target } = event;
  console.log(target);
  if (!isInactiveFilterBtn(target)) return;
  productsContainer.innerHTML = "";

  changeFilterState(target);
  if (appState.activeFilter) {
    renderFilteredProducts();
    appState.currentProductsIndex = 0;
    return;
  }

  renderProducts(appState.products[0]);
};

// Función para filtar los productos por categoría y renderizarlos

const renderFilteredProducts = () => {
  const filteredProducts = productsData.filter(
    (product) => product.category === appState.activeFilter
  );
  renderProducts(filteredProducts);
};

const init = () => {
  renderProducts(appState.products[0]);
  showMoreBtn.addEventListener("click", showMoreProducts);
  categoriesContainer.addEventListener("click", applyFilter);
  cartBtn.addEventListener("click", toggleCart);
  menuBtn.addEventListener("click", toggleMenu);
  window.addEventListener("scroll", closeOnScroll);
  barsMenu.addEventListener("click", closeOnClick);
  overlay.addEventListener("click", closeOnOverlayClick);
  document.addEventListener("DOMContentLoaded", renderCart);
  document.addEventListener("DOMContentLoaded", showCartTotal);
  productsContainer.addEventListener("click", addProduct);
  productsCart.addEventListener("click", handleQuantity);
  buyBtn.addEventListener("click", completeBuy);
  deleteBtn.addEventListener("click", deleteCart);
  disableBtn(buyBtn);
  disableBtn(deleteBtn);
  renderCartBubble(cart);
};

init();
