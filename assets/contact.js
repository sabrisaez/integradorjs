const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

// Función para chequear si el campo esta vacio (input)
const isEmpty = (input) => {
  return !input.value.trim().length;
};

// Función para determinar si el largo del value del input esta entre un minimo y un maximo de caracteres
const isBetween = (input, min, max) => {
  return input.value.length >= min && input.value.length < max;
};

// Función para validar una dirección de email con expresión regular
const isEmailValid = (input) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  return re.test(input.value.trim());
};

// Función para validar el telefeno con expresión regular
const isValidPhone = (input) => {
  const re = /^[0-9]{10}$/;
  return re.test(input.value.trim());
};

// Función para mostrar error al validar un input

const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove("success");
  formField.classList.add("error");
  const error = formField.querySelector("small");
  error.style.display = "block";
  error.textContent = message;
};

// Función para mostrar un input como valido

const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("error");
  formField.classList.add("success");
  const error = formField.querySelector("small");
  error.textContent = "";
};

// Función para validar un input de tipo texto

const checkTextInput = (input) => {
  // setear la validez del value a retortnar
  let valid = false;
  const minCharacters = 3;
  const maxCharacters = 25;

  if (isEmpty(input)) {
    showError(input, "Este campo es obligatorio");
    return;
  }

  if (!isBetween(input, minCharacters, maxCharacters)) {
    showError(
      input,
      `Este campo debe tener entre ${minCharacters} y ${maxCharacters} caracteres`
    );
    return;
  }

  showSuccess(input);
  valid = true;
  return valid;
};

// Función para validar si el input email es valido

const checkEmail = (input) => {
  // setear la validez del value a retortnar
  let valid = false;

  if (isEmpty(input)) {
    showError(input, "El email es obligatorio");
    return;
  }
  if (!isEmailValid(input)) {
    showError(input, "El email no es valido");
    return;
  }

  showSuccess(input);
  valid = true;
  return valid;
};

// función para validar el input del mensaje

const checkMessage = (input) => {
  // setear la validez del value a retortnar
  let valid = false;

  if (isEmpty(input)) {
    showError(input, "Este campo no puede estar vacío.");
    return;
  }

  showSuccess(input);
  valid = true;
  return valid;
};

// Función para validar el input del telefono

const checkPhone = (input) => {
  // setear la validez del value a retortnar
  let valid = false;

  if (isEmpty(input)) {
    showError(input, "El telefono es obligatorio");
    return;
  }
  if (!isValidPhone(input)) {
    showError(input, "El telefono no es valido");
    return;
  }

  showSuccess(input);
  valid = true;
  return valid;
};

// Función general

const validateForm = (e) => {
  e.preventDefault();
  // guardar el estado de los inputs en variables
  let isNameValid = checkTextInput(nameInput);
  let isLastNameValid = checkTextInput(lastNameInput);
  let isEmailValid = checkEmail(emailInput);
  let isMessageValid = checkMessage(messageInput);
  let isPhoneValid = checkPhone(phoneInput);

  let isValidForm =
    isNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isMessageValid &&
    isPhoneValid;

  if (isValidForm) {
    alert("Mensaje enviado con éxito! Pronto nos contactaremos con vos.");
    window.location.href = "index.html";
  }
};

const init = () => {
  contactForm.addEventListener("submit", validateForm);
  nameInput.addEventListener("input", () => checkTextInput(nameInput));
  lastNameInput.addEventListener("input", () => checkTextInput(lastNameInput));
  emailInput.addEventListener("input", () => checkEmail(emailInput));
  messageInput.addEventListener("input", () => checkMessage(messageInput));
  phoneInput.addEventListener("input", () => checkPhone(phoneInput));
};
init();
