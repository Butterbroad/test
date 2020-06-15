const succesModal = document.querySelector('#succes-modal');
const submitBtn = document.querySelector('.form__btn');
const modalClose = document.querySelector('.succes-modal__btn');
const formInput = document.querySelector('.form__input');
const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const bodyLock = document.querySelector('body');

headerBurger.addEventListener('click', function () {
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    bodyLock.classList.toggle('lock');
});

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    succesModal.style.opacity = "1";
    succesModal.style.visibility = "visible";
    formInput.value = "";
});

modalClose.addEventListener('click', function () {
    succesModal.style.opacity = "0";
    succesModal.style.visibility = "hidden";
});


//SLIDER
$(document).ready(function () {
    $('.slider__wrapper').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        autoplay: true,
    });
});
























//webp support
@@include('webpsupport.js')

//slick js
@@include('slick.min.js')
