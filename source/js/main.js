var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var modal = document.querySelector(".modal");
var overlay = document.querySelector(".modal-overlay");
var modalLink = document.querySelector(".card-product__btn");
var modalLinkCatalog = document.querySelectorAll(".catalog-pic__btn");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function () {
  navMain.classList.toggle("main-nav--closed");
  navMain.classList.toggle("main-nav--opened");
});

///Модалка на главной

if (modalLink) {
  modalLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.toggle("modal--show");
    overlay.classList.toggle("modal-overlay--show");
  });
};

// Модалка в каталоге

if (modalLinkCatalog) {
  for (var i = 0; i < modalLinkCatalog.length; i++) {
    modalLinkCatalog[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      modal.classList.toggle("modal--show");
      overlay.classList.toggle("modal-overlay--show");
    });
  };
};

//Закрытие модалки

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal--show")) {
      evt.preventDefault();
    }
  }
});

overlay.addEventListener("click", function (evt) {
  modal.classList.toggle("modal--show");
  overlay.classList.toggle("modal-overlay--show");
});

ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [59.938631, 30.323055],
    zoom: 19
  }, {
      searchControlProvider: 'yandex#search'
    }),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'магазин Мишка',
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: '../img/icon-map-pin.svg',
        // Размеры метки.
        iconImageSize: [66, 101],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-15, -80]
      });

  myMap.geoObjects
    .add(myPlacemark);
});
