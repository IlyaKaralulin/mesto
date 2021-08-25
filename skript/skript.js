/**
 * @param {number} from
 * @param {number} to
 * @param {number} decimal
 */
let page = document.querySelector(".page");
let overlay = page.querySelector(".overlay");
let button_close = page.querySelector(".popup__button-close");
let edit_button = page.querySelector(".profile__buttom_edit-rectangle");
let name_input = page.querySelector(".popup__input-name");
let info_input = page.querySelector(".popup__input-info");
let profile_name = page.querySelector(".profile__title");
let profile_info = page.querySelector(".profile__subtitle");
let popup_form = page.querySelector(".popup-form");
let like_button = page.querySelectorAll(".element__like");
let elemnt__title = page.querySelectorAll(".element__title");
let button__edit_title = page.querySelectorAll(".element__button-edit-cart-name");
let save_button = page.querySelector(".popup__button-save");
let elements = page.querySelector(".elements");
let element = page.querySelectorAll(".element");
let add_button = page.querySelector(".profile__buttom_add-rectangle");
//console.log(element);

let count_element = like_button.length;
//console.log(count_element);

var count = new Array(count_element);
for (let i = 0; i < count_element; i++) {
  count[i] = 1;
}

function popup_disable() {
  overlay.classList.add("disable");
  name_input.value = "";
  info_input.value = "";
}

function popup_anable() {
  overlay.classList.remove("disable");
}

function change_pofile(evt) {
  evt.preventDefault();
  if (name_input.value === "" || info_input.value === "") {
  } else {
    profile_name.textContent = name_input.value;
    profile_info.textContent = info_input.value;
    overlay.classList.add("disable");
    name_input.value = "";
    info_input.value = "";
  }
}

function active_like(like, i) {
  if (i % 2 === 0) {
    like.classList.remove("element__like_activ");
  } else {
    like.classList.add("element__like_activ");
  }
  i++;
  return i;
}

function edit_cart_name(elemnt__title, button__edit_title) {
  button__edit_title.classList.add("element__button-edit-cart-name_activ");
  elemnt__title.classList.add("element__title_disable");
}

function key(elemnt__title, button__edit_title) {
  if (event.code === "Enter") {
    if (button__edit_title.value === "") {
    } else {
      elemnt__title.textContent = button__edit_title.value;
    }
    button__edit_title.classList.remove("element__button-edit-cart-name_activ");
    elemnt__title.classList.remove("element__title_disable");
    button__edit_title.value = "";
  }
}

for (let i = 0; i < count_element; i++) {
  like_button[i].addEventListener("click", function () {
    count[i] = active_like(like_button[i], count[i]);
  });
}

for (let i = 0; i < count_element; i++) {
  elemnt__title[i].addEventListener("click", function () {
    edit_cart_name(elemnt__title[i], button__edit_title[i]);
  });
  button__edit_title[i].addEventListener("keydown", function () {
    key(elemnt__title[i], button__edit_title[i]);
  });
}

function add_cart() {
  elements.insertAdjacentHTML(
    "beforeend",
    `<div class="element">
    <div class="element__contener-img">
      <img class="element__image" src="" alt="вставте изображение" />
    </div>
    <div class="element__info">
        <h2 class="element__title">введите название</h2>
        <input class="element__button-edit-cart-name" type="text">
        <button class="element__like"></button>
      </div>
    </div>`
  );

  element = page.querySelectorAll(".element");
  console.log("карты ", element);

  count_element = element.length;
  console.log("количесво карт ", count_element);

  count = new Array(count_element);
  for (let i = 0; i < count_element; i++) {
    count[i] = 1;
  }
  console.log("массив индексов ", count);
  like_button = page.querySelectorAll(".element__like");
  console.log("лайки ", like_button);
  return like_button;
}

button_close.addEventListener("click", popup_disable);
edit_button.addEventListener("click", popup_anable);
popup_form.addEventListener("submit", change_pofile);
add_button.addEventListener("click", add_cart); 

