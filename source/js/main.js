var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var modal = document.querySelector(".modal");
var overlay = document.querySelector(".modal-overlay");
var modalLink = document.querySelector(".card-product__btn");
var modalLinkCatalog = document.querySelectorAll(".catalog-pic__btn");
var yandexMap = document.querySelector(".map__container");

navMain.classList.remove("main-nav--nojs");

if (navMain) {
  if (navMain.classList.contains("main-nav--opened")) {
    navMain.classList.toggle("main-nav--opened");
    navMain.classList.toggle("main-nav--closed");
    navToggle.addEventListener("click", function () {
      navMain.classList.toggle("main-nav--closed");
      navMain.classList.toggle("main-nav--opened");
    });
  };
};

///Модалка на главной

if (modalLink && overlay) {
  modalLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.toggle("modal--show");
    overlay.classList.toggle("modal-overlay--show");
  });
};

// Модалка в каталоге

if (modalLinkCatalog && overlay) {
  for (var i = 0; i < modalLinkCatalog.length; i++) {
    modalLinkCatalog[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      modal.classList.toggle("modal--show");
      overlay.classList.toggle("modal-overlay--show");
    });
  };
};

//Закрытие модалки
if (modalLink || modalLinkCatalog && overlay) {
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modal.classList.contains("modal--show")) {
        evt.preventDefault();
      }
    }
  });
};

if (modalLink || modalLinkCatalog && overlay) {
  overlay.addEventListener("click", function (evt) {
    modal.classList.toggle("modal--show");
    overlay.classList.toggle("modal-overlay--show");
  });
};

if (yandexMap) {
  ymaps.ready(function () {
    var myMap = new ymaps.Map("map", {
      center: [59.938631, 30.323055],
      zoom: 19
    }, {
        searchControlProvider: "yandex#search"
      }),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: "магазин Мишка",
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: "default#image",
          // Своё изображение иконки метки.
          iconImageHref: "img/icon-map-pin.svg",
          // Размеры метки.
          iconImageSize: [66, 101],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-15, -80]
        });

    myMap.geoObjects
      .add(myPlacemark);
  });
};
