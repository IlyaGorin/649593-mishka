var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.modal-overlay');
var modalLink = document.querySelector('.card-product__btn');
var modalLinkCatalog = document.querySelectorAll('.catalog-pic__btn');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

///Модалка на главной 

if (modalLink) {
  modalLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add('modal--show');
    overlay.classList.add('modal-overlay--show');
  })
}

// Модалка в каталоге 

if (modalLinkCatalog) {
  for (var i = 0; i < modalLinkCatalog.length; i++) {
    modalLinkCatalog[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      modal.classList.add('modal--show');
      overlay.classList.add('modal-overlay--show');
    });
  };
};

//Закрытие модалки 

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains('modal--show')) {
      evt.preventDefault();
      modal.classList.remove('modal--show');
      overlay.classList.remove('modal-overlay--show');
    }
  }
});

overlay.addEventListener('click', function (evt) {
  modal.classList.remove('modal--show');
  overlay.classList.remove('modal-overlay--show');
});